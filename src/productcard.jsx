import React from 'react';
import './pc.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src="fin.jpg" alt="finances" />
      <h2>Product Hunt</h2>
      <p>Welcome to Product Hunt! take a tour today!</p>
      {/* Additional details */}
    </div>
  );
}

export default ProductCard;
