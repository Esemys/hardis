import React, { useState } from "react";
import "./style.css"; 
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import TextAd from "../../components/TextAd";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample household products array
const householdProducts = [
	{
		id: 1,
		name: "Isol Germicide",
		image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		details: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		/*sizes*/
		sizes: "available in 100ml, 350ml"
	},
	{
		id: 2,
		name: "Isol Soap",
		image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
		summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		sizes: "available in 110g"
	},
	{
		id: 3,
		name: "Akacha Soap",
		image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
		summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		details: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		sizes: "available in 100g"
	},
	{
		id: 4,
		name: "Divitol Anitseptic",
		image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
		summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		details: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		sizes: "available in 100ml, 350ml"
	},
	{
		id: 5,
		name: "Pine Divitol",
		image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
		summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		details: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		sizes: "available in 110ml, 350ml"
	},
	{
		id: 6,
		name: "Royallux Astrigent",
		image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
		summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		details: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		sizes: "available in 1.5L, 2.0L"
	},
	{
		id: 7,
		name: "Hardis Methylated Spirit",
		image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
		summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		details: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		sizes: "available in 100ml, 350ml"
	},
	{
		id: 8,
		name: "Hardromed Liquid Detergent",
		image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
		summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		details: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		sizes: "available in 1.5L, 2.0L"
	},
	{
		id: 9,
		name: "Ekko Rose",
		image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
		summary: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		details: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		sizes: "available in 100ml, 350ml"
	},
	
	
	
];

// Popup component
function ProductPopup({ product, onClose }) {
	if (!product) return null;
	return (
		<div className="popup-overlay">
			<div style={{marginTop:"28vh"}}></div>
			<div className="popup-content">
				<img src={product.image} alt={product.name} style={{ width: "70%" }} />
				
				<h2>{product.name}</h2>
				<p>{product.details}</p>
				<p>{product.sizes}</p>
				{/* additional information includes sizes,'place order' and times*/}
				<div className="button-style">
					<Link to="/products" className="order-button">place order</Link>
					<p onClick={onClose} className="close-button">close</p>
				</div>
			</div>
		</div>
	);
}

// Main component
export default function Blogs() {
	const [selectedProduct, setSelectedProduct] = useState(null);

	return (
		<>
			<NavBar />

			
			<div >
				<TextAd />
				<div className="display-grid">
					{householdProducts.map(product => (
						<div className="display-container" key={product.id} style={{}}>
							<img src={product.image} alt={product.name} style={{ width: "80%", borderRadius: 4, height: 120, objectFit: "cover" }} />
							<h3>{product.name}</h3>
							<p>{product.summary}</p>
							<button className="detail-button" onClick={() => setSelectedProduct(product)}> View Details </button>
						</div>
					))}
				</div>
				<ProductPopup product={selectedProduct} onClose={() => setSelectedProduct(null)} />
			</div>
			<TextAd />
			{/* You can add more components here as needed */}
			<Footer />
		</>
		
	);
}