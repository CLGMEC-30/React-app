// src/context/ProductContext.jsx
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const initialProducts = [
  {
    id: 1,
    name: "iPhone 14 Pro",
    category: "smartphone",
    rating: 5,
  },
  {
    id: 2,
    name: "Samsung Galaxy Buds",
    category: "accessories",
    rating: 4,
  },
  {
    id: 3,
    name: "Dell XPS 13",
    category: "laptop",
    rating: 4,
  },
  {
    id: 4,
    name: "Organic Apples",
    category: "groceries",
    rating: 5,
  },
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: prev.length + 1, rating: 4 }, // default rating
    ]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  return useContext(ProductContext);
}
