import React from 'react';
import './OrderSummary.scss';

const OrderSummary = ({ itemList }) => {
  return (
    <div className="rightContainer">
      <h1>Order Summary</h1>
      <div className="summaryWrapper">
        <div className="summaryTitle">
          <p>Subtotal</p>
          <p>Shipping</p>
          <p>Tax</p>
          <p>Estimated Total</p>
        </div>
        <div className="summaryValue">
          <p>$</p>
          <p>FREE</p>
          <p>Calculated at checkout</p>
          <p>USD $</p>
        </div>
      </div>
      <button>CHECKOUT</button>
    </div>
  );
};

export default OrderSummary;
