import React from 'react';
import './WomanSlideCard.scss';

const WomanSlideCard = ({ source }) => {
  const { src, productname, price } = source;

  return (
    <div className="womanSlideCard">
      <img src={src} alt="lulu1" />
      <div className="productNamePrice">
        <div className="productName">{productname}</div>
        <div className="productPrice">{price}</div>
      </div>
    </div>
  );
};

export default WomanSlideCard;
