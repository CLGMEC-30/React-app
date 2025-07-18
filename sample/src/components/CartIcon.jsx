import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartIcon() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <Link to="/cart" className="cart-icon">
      🛒 <span className="cart-count">{totalItems}</span>
    </Link>
  );
}
