import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product_list from './container/productlist';
import Product_details from './container/productdetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Product_list />} />
        {/* <Route exact path="/product-list" element={<Product_list />} /> */}
        {/* <Route exact path="/product-details/:id" element={<Product_details />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;