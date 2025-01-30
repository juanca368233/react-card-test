import React from "react";
import ProductImages from "../components/ProductImages";
import Info from "../components/Info/Info";

import logo from "../assets/img/logo.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="shoeBackground">


            <h1 className="hr">HR</h1>
            <img src={logo} alt="logo" className="logo" />
            

            <ProductImages />
          </div>
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Home;
