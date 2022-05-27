import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Item from '../../components/Bag/Item';
import './Bag.scss';

const Bag = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/itemData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setItemList(data);
      });
  }, []);

  const onRemove = useCallback(
    id => {
      setItemList(itemList.filter(item => item.id !== id));
    },
    [itemList]
  );

  return (
    <div className="bag">
      <nav>
        <button type="submit" onClick={goToMain}>
          <img src="/bagImages/lemon.png" alt="logo" />
        </button>
      </nav>
      {/* <div className="emptyBag">
        <h1>Give your bag some love!</h1>
        <button type="submit" onClick={goToMain}>
          SHOP WHAT'S NEW
        </button>
      </div> */}
      <div className="bagContainer">
        <div className="leftContainer">
          <h1>
            My Bag <span>({itemList.length} Items)</span>
          </h1>
          {itemList.map(item => {
            return <Item item={item} key={item.id} onRemove={onRemove} />;
          })}
        </div>
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
              <p>$price</p>
              <p>FREE</p>
              <p>Calculated at checkout</p>
              <p>USD $</p>
            </div>
          </div>
          <button>CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Bag;
