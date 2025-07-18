import React, { useState } from "react";
import { useProductContext } from "../context/ProductContext";

export default function SellPage() {
  const { addProduct } = useProducts();
  const [name, setName] = useState("");
  const [type, setType] = useState("Smartphones");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addProduct({ name, type });
      setName("");
      alert("Product added successfully!");
    }
  };

  return (
    <div className="sell-form">
      <h2>Sell Your Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Smartphones</option>
          <option>Accessories</option>
          <option>Laptops</option>
          <option>Groceries</option>
        </select>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
