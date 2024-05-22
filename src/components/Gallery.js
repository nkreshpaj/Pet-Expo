import React, { useEffect, useState } from "react";
import Card from "./Card";
import PopUp from "./PopUp";
import "./Gallery.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Gallery({path}) {
  let { type } = useParams()
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/"+type);
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  useEffect(() => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));
    setFilteredItems(filtered);
  }, [items, searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopUp = () => {
    setSelectedItem(null);
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
        {filteredItems.map((item) => (
          <Card key={item.id} item={item} onClick={handleCardClick} />
        ))}
      </div>
      {selectedItem&& <PopUp item={selectedItem} onClose={handleClosePopUp} />}
    </div>
  );
}

export default Gallery;
