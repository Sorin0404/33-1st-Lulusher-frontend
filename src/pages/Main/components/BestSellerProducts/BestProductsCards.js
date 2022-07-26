import React from 'react';
import './BestProductsCards.scss';

const BestProductsCards = ({ source }) => {
  const { src, productname, price } = source;

  return (
    <div className="bestProductsCards">
      <img src={src} alt="luluIsher Best Item" />
      <div className="productNamePrice">
        <div className="productName">{productname}</div>
        <div className="productPrice">{price}</div>
      </div>
    </div>
  );
};

export default BestProductsCards;
