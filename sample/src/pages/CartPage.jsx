import React from "react";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, updateQty, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.title}</strong> - ₹{item.price}
              </div>
              <div>
                Qty:
                <input
                  type="number"
                  value={item.qty}
                  min="1"
                  onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
                />
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && <h3>Total: ₹{total.toLocaleString()}</h3>}
    </div>
  );
}
