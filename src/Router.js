import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bag from './pages/Bag/Bag';
import Main from './pages/Main/Main';
import Modal from './pages/Modal/Modal';
import Product from './pages/Product/Product';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/product" element={<Product />} />
        <Route path="/productdetail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
