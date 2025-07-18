import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>MyCommerce</h4>
        <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
      <div className="footer-section">
        <a href="#">About</a>
        <a href="#">Returns</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
}
