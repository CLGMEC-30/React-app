// SellProductSection.jsx
import React from "react";

export default function SellProductSection() {
  return (
    <section className="sell-section container">
      <h2>Sell a Product</h2>
      <form className="sell-form">
        <input type="text" placeholder="Product Name" required />
        <input type="number" placeholder="Price (₹)" required />
        <input type="text" placeholder="Category" required />
        <input type="url" placeholder="Image URL" required />
        <textarea placeholder="Description (optional)" />
        <button type="submit">Post Product</button>
      </form>
    </section>
  );
}
