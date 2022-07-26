import React from 'react';
import './ManSlideCard.scss';

const ManSlideCard = ({ source }) => {
  const { src, productname, price } = source;

  return (
    <div className="manSlideCard">
      <img src={src} alt="lulu1" />
      <div className="productNamePrice">
        <div className="productName">{productname}</div>
        <div className="productPrice">{price}</div>
      </div>
    </div>
  );
};

export default ManSlideCard;
