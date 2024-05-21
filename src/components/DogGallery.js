import React, { useEffect, useState } from "react";
import DogCard from "./DogCard";
import './DogGallery.css';
import DogPopUp from './DogPopUp';

function DogGallery() {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDog, setSelectedDog] = useState(null);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const response = await fetch('https://freetestapi.com/api/v1/dogs');
        const data = await response.json();
        setDogs(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  useEffect(() => {
    const filtered = dogs.filter(dog =>
      dog.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDogs(filtered);
  }, [dogs, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (dog) => {
    setSelectedDog(dog);
  };

  const handleClosePopUp = () => {
    setSelectedDog(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a dog..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="gallery">
        {filteredDogs.map((dog) => (
          <DogCard key={dog.id} dog={dog} onClick={handleCardClick} />
        ))}
      </div>
      {selectedDog && (
        <DogPopUp dog={selectedDog} onClose={handleClosePopUp} />
      )}
    </div>
  );
}

export default DogGallery;
