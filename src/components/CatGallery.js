import React, { useEffect, useState } from "react";
import CatCard from "./CatCard";
import CatPopUp from "./CatPopUp";
import "./CatGallery.css";

function CatGallery() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState(null);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/cats");
        const data = await response.json();
        setCats(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCats();
  }, []);

  useEffect(() => {
    const filtered = cats.filter((cat) =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCats(filtered);
  }, [cats, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (cat) => {
    setSelectedCat(cat);
  };

  const handleClosePopUp = () => {
    setSelectedCat(null);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a cat..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="gallery">
        {filteredCats.map((cat) => (
          <CatCard key={cat.id} cat={cat} onClick={handleCardClick} />
        ))}
      </div>
      {selectedCat && <CatPopUp cat={selectedCat} onClose={handleClosePopUp} />}
    </div>
  );
}

export default CatGallery;
