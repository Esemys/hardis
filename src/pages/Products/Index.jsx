import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { FaTimes } from "react-icons/fa";


const products = [
	{ name: "Isol Germicide", image: "https://images.unsplash.com/photo-1748324575258-b51559c5fefd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",  sizes: [{ size: 150, price: 1500, unit: "ml" }, { size: 500, price: 2800, unit: "ml" }, { size: 1, price: 5400, unit: "L" }] },
	{ name: " Haromed Bleach", image:"https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", sizes: [{ size: 500, price: 1200, unit:"ml" }, { size: 1, price: 2300, unit:"L" }, { size: 4, price: 4500, unit:"L" }]},
	{ name: "Pine Divitol", image:"https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", sizes: [{ size: 205, price: 1700, unit:"ml" }, { size: 500, price: 3200,unit:"ml" }, { size: 1, price: 3200,unit:"L" }] },
	{ name: "Methylated Spirit",  image:"https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D", sizes: [{ size: 1000, price: 2500 }, { size: 2000, price: 4800 }] },
	{ name: "Divitol Antiseptic", sizes: [{ size: 500, price: 1600 }, { size: 1000, price: 3100 }] },
	{ name: "Hardis Liquid Detergent", sizes: [{ size: 500, price: 1400 }, { size: 1000, price: 2700 }] },
	{ name: "Akacha Balm", sizes: [{ size: 1000, price: 2600 }, { size: 2000, price: 5000 }] },
	{ name: "Ekko Rose", sizes: [{ size: 250, price: 900 }, { size: 500, price: 1700 }] },
	{ name: "Glycerine oil", sizes: [{ size: 500, price: 1300 }, { size: 1000, price: 2500 }] },
	{ name: "Royallux Astrigent", sizes: [{ size: 500, price: 1800 }, { size: 1000, price: 3500 }] },
	{ name: "Secret Oil", sizes: [{ size: 500, price: 2000 }] },
	
	{ name: "Isol Soap", sizes: [{ size: 110, price: 3200,unit:"g" }] },
	{ name: "Akacha Soap", sizes: [{ size: 500, price: 2200 }] },
	{ name: "Akacha Balm ( 10 x 12)", sizes: [{ size: 46, price: 1900, unit: "g"}] },
	{ name: "Mold Remover", sizes: [{ size: 500, price: 2100 }] },
];

function Products() {
	const [selected, setSelected] = useState({});

	const handleProductSelect = (productIdx, checked) => {
		setSelected((prev) => {
			const updated = { ...prev };
			if (!checked) {
				delete updated[productIdx];
			} else {
				updated[productIdx] = {};
			}
			return updated;
		});
	};

	const handleSizeSelect = (productIdx, sizeIdx, checked) => {
		setSelected((prev) => {
			const updated = { ...prev };
			if (!updated[productIdx]) updated[productIdx] = {};
			if (!checked) {
				delete updated[productIdx][sizeIdx];
			} else {
				updated[productIdx][sizeIdx] = { qty: 1 };
			}
			return updated;
		});
	};

	const handleQtyChange = (productIdx, sizeIdx, value) => {
		setSelected((prev) => {
			const updated = { ...prev };
			if (!updated[productIdx]) updated[productIdx] = {};
			if (!updated[productIdx][sizeIdx]) updated[productIdx][sizeIdx] = {};
			updated[productIdx][sizeIdx].qty = Math.max(1, Number(value));
			return updated;
		});
	};

	const getTotal = () => {
		let total = 0;
		Object.entries(selected).forEach(([pIdx, sizes]) => {
			Object.entries(sizes).forEach(([sIdx, { qty }]) => {
				const price = products[pIdx].sizes[sIdx].price;
				total += price * qty;
			});
		});
		return total;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		let message = "Order for Hardis Products:\n";
		Object.entries(selected).forEach(([pIdx, sizes]) => {
			const product = products[pIdx];
			Object.entries(sizes).forEach(([sIdx, { qty }]) => {
				const sizeObj = product.sizes[sIdx];
				message += `- ${product.name} (${sizeObj.size}ml): ${qty} carton(s) @ ₦${sizeObj.price} each\n`;
			});
		});
		message += `Total: ₦${getTotal()}`;
		const phoneNumber = "2349033561947"; // Replace with your WhatsApp number
		const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
		window.open(whatsappUrl, "_blank");
	};

	const [search, setSearch] = useState("");
	const filteredProducts = products.filter(product =>
		product.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<>
			<NavBar />
			<div style={{marginTop :"10vh"}}></div>
			<div style={{  maxWidth: 700, margin: "auto", padding: 24 }}>
				<h2>Hardis Products</h2>
					<div style={{ position: "relative", marginTop: 20,  zIndex: 1 }}>
						<input
							type="text"
							placeholder="Search products..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							style={{
							width: "100%",
							padding: 10,
							marginBottom: 20,
							fontSize: 16,
							border: "1px solid #888",
							borderRadius: 5,
							paddingRight: 30 // add some padding to make room for the icon
							}}
						/>
						{search && (
							<FaTimes
							style={{
								position: "absolute",
								right: 10,
								top: 10,
								cursor: "pointer",
								backgroundColor: "#666",
								borderRadius: "50%"
							}}
							onClick={() => setSearch("")}
							/>
						)}
					</div>
				<form onSubmit={handleSubmit}>
					{filteredProducts.map((product, pIdx) => {
						// Find the original index in products array
						const originalIdx = products.findIndex(p => p.name === product.name);
						return (
							<div key={originalIdx} style={{ border: "1px solid #eee", marginBottom: 16, padding: 12, borderRadius: 8, backgroundColor: "#666" }}>
								<label style={{ display: "flex", alignItems: "center", marginBottom: 8 , justifyContent: "space-between", cursor: "pointer", borderRadius: 9, padding: 8, backgroundColor: selected[originalIdx] ? "#2E4053" : "#444" }}>
									<b>{product.name}</b>
									{product.image && (
										<img src={product.image} alt={product.name} style={{ width: 100, height: 80, marginRight: 12, objectFit: 'contain' }} />
									)}	
									
									<input
										type="checkbox"
										checked={!!selected[originalIdx]}
										onChange={(e) => handleProductSelect(originalIdx, e.target.checked)}
									/>{" "}
									
								</label>
								{selected[originalIdx] && (
									<div style={{ marginLeft: 24, marginTop: 8 }}>
										{product.sizes.map((size, sIdx) => (
											<div key={sIdx} style={{ marginBottom: 8 }}>
												<label>
													<input
														type="checkbox"
														checked={!!selected[originalIdx][sIdx]}
														onChange={(e) => handleSizeSelect(originalIdx, sIdx, e.target.checked)}
													/>{" "}
													
													{size.size}{size.unit} - ₦{size.price}
												</label>
												{selected[originalIdx][sIdx] && (
													<span style={{ marginLeft: 16 }}>
														<label>
															Quantity (cartons):{" "}
															<input
																type="number"
																min={1}
																value={selected[originalIdx][sIdx].qty}
																onChange={(e) => handleQtyChange(originalIdx, sIdx, e.target.value)}
																style={{ width: 60 }}
															/>
														</label>
													</span>
												)}
											</div>
										))}
									</div>
								)}
							</div>
						);
					})}
					<div style={{ fontWeight: "bold", marginBottom: 16, alignSelf: "center", color:"lightgreen",backgroundColor: "#2E4053", padding: 12, borderRadius: 8 }}>
						Total: ₦{getTotal()}
					</div>
					<button type="submit" style={{ padding: "8px 24px", fontSize: 16, background: "#25D366", color: "#fff", border: "none", borderRadius: 4, alignSelf: "center", cursor: "pointer" }}>
						<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: 20, marginRight: 8 }} />
						{" "}
						WhatsApp Order
						{" "}
						
					</button>
				</form>
			</div>
			<Footer />
		</>
	);
}

export default Products;