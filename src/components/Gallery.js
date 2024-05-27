import React, { useEffect, useState } from "react";
import Card from "./Card";
import PopUp from "./PopUp";
import "./Gallery.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Gallery({ path }) {
  const { type } = useParams();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedOrigin, setSelectedOrigin] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("https://freetestapi.com/api/v1/" + type);
        const data = await response.json();
        setItems(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, [type]);

  useEffect(() => {
    let filtered = items;

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedOrigin) {
      filtered = filtered.filter((item) => item.origin === selectedOrigin);
    }

    filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    setFilteredItems(filtered);
  }, [items, searchTerm, selectedOrigin]);

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

  const uniqueOrigins = [...new Set(items.map((item) => item.origin))];

  return (
    <div>
      <div className="search-bar">
        <div className="search-icon">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="searchButton">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="dropdown">
          <div className="dropdown-options">
            <select
              className="dd-item"
              onChange={(e) => setSelectedOrigin(e.target.value)}
              value={selectedOrigin}
            >
              <option value="">All Origins</option>
              {uniqueOrigins.map((origin) => (
                <option key={origin} value={origin}>
                  {origin}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="gallery">
        {filteredItems.map((item) => (
          <Card key={item.id} item={item} onClick={handleCardClick} />
        ))}
      </div>
      {selectedItem && <PopUp item={selectedItem} onClose={handleClosePopUp} />}
    </div>
  );
}

export default Gallery;
