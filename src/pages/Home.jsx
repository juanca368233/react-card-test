import React from "react";
// aca importo los componentes
import ProductImages from "../components/ProductImages";
import Info from "../components/Info/Info";

// aca importo el logo
import logo from "../assets/img/logo.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <div className="card">
          <div className="showBackground">

              {/* aca se utiliza el logo */}
            <h1 className="hr">HR</h1>
            <img src={logo} alt="logo" className="logo" />
            

            <ProductImages />
          </div>
          <Info />
        </div>
        <div className="card">
          <div className="showBackground">


            <h1 className="hr">HR</h1>
            <img src={logo} alt="logo" className="logo" />
            

            <ProductImages />
          </div>
          <Info />
        </div>
        <div className="card">
          <div className="shoBackground">


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
