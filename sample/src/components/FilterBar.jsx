import React from "react";

const categories = [
  "All",
  "Smartphones",
  "Laptops",
  "TV & Appliances",
  "Audio",
  "Fashion",
  "Beauty",
  "Books"
];

export default function FilterBar({ setSearchTerm, selectedCategory, setSelectedCategory }) {
  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search for products..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active-category" : ""}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
