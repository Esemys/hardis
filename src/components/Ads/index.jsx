import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const adContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid,rgb(0, 38, 255)",
  borderRadius: "12px",
  boxShadow: "0 4px 16px rgba(255,152,0,0.15)",
  background: "linear-gradient(135deg, #fffbe7 60%, #ffe0b2 100%)",
  padding: "24px",
  cursor: "pointer",
  maxWidth: "320px",
  margin: "32px auto",
  transition: "box-shadow 0.2s",
};

const imageStyle = {
  width: "220px",
  height: "180px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "16px",
  border: "1px solid #ffd54f",
  background: "#fffde7",
};

const tagStyle = {
  background: "#ff9800",
  color: "#fff",
  padding: "8px 18px",
  borderRadius: "20px",
  fontWeight: "bold",
  fontSize: "1rem",
  letterSpacing: "1px",
  boxShadow: "0 2px 8px rgba(255,152,0,0.12)",
};

const PRODUCT_PAGE_URL = "/blogs"; // Change as needed
const imageUrls = [
  "https://images.unsplash.com/photo-1549049950-48d5887197a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=60",
];

const sliderControlsStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  marginTop: "10px",
};

function AdImageContainer({ imageUrl }) {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PRODUCT_PAGE_URL);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={adContainerStyle} onClick={handleClick} title="Click to view products">
      <img src={imageUrls[current]} alt="Product" style={imageStyle} />
      <div style={sliderControlsStyle}>
        <button onClick={prevImage} aria-label="Previous" style={{ border: "none", color: "blue", background: "none", cursor: "pointer", fontSize: "1.5rem" }}>
          &#8592;
        </button>
        <span style={{ fontWeight: "bold" }}>{current + 1} / {imageUrls.length}</span>
        <button onClick={nextImage} aria-label="Next" style={{ border: "none", color: "blue", background: "none", cursor: "pointer", fontSize: "1.5rem" }}>
          &#8594;
        </button>
      </div>
      <div style={tagStyle}>Click to view products</div>
    </div>
  );
}


export default AdImageContainer;