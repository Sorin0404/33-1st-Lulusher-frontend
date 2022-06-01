import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Bag from './pages/Bag/Bag';
import Main from './pages/Main/Main';
import Product from './pages/Product/Product';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/products" element={<Product />} />
        {/* <Route path="/product/detail" element={<ProductDetail />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
