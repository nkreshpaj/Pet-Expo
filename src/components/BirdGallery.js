import React, { useEffect, useState } from "react";
import BirdCard from "./BirdCard";
import BirdPopUp from "./BirdPopUp";
import './BirdGallery.css';

function BirdGallery() {
  const [birds, setBirds] = useState([]);
  const [filteredBirds, setFilteredBirds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBird, setSelectedBird] = useState(null);

  useEffect(() => {
    const fetchBirds = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/birds');
        const data = await response.json();
        setBirds(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchBirds();
  }, []);

  useEffect(() => {
    const filtered = birds.filter(bird =>
      bird.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBirds(filtered);
  }, [birds, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (bird) => {
    setSelectedBird(bird);
  };

  const handleClosePopUp = () => {
    setSelectedBird(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a bird..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="gallery">
        {filteredBirds.map((bird) => (
          <BirdCard key={bird.id} bird={bird} onClick={handleCardClick} />
        ))}
      </div>
      {selectedBird && <BirdPopUp bird={selectedBird} onClose={handleClosePopUp} />}
    </div>
  );
}

export default BirdGallery;
