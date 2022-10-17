import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./components/CartScreen";
import DetailScreen from "./components/DetailScreen";
import DisparcherScreen from "./components/DisparcherScreen";
import Header from "./components/Header";
import PayNow from "./components/PayNow";
import Product from "./components/Product";

const App: React.FC = (): any => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/dispatch" element={<DisparcherScreen />} />
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/detail/:id" element={<DetailScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
