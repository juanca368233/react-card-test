import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";



const Info = () => {
  const shoeName = (
    <div className="shoeName">
      <h3 className="small">Herramientas de gestión</h3>
      <div>
        <h1 className="big">Producto 1</h1>
      
      </div>
      <div className="flex gap-1">
    <FaStar className="star"/>
    <FaStar className="star"/>
    <FaStar className="star"/>
    <FaStar className="star"/>
    <FaRegStar className="star-fill"/>
  </div>
  <h3 className="title">$2'500.000</h3>
    </div>
  );

  const description = (
    <div className="description">
      
      <p className="text">
      Todo lo que necesitas 
      <br /> para tu gestión de manera 
      <br /><span className="boldfont">integrada y optimizada.</span>
      </p>
    </div>
  );



  const BuySection = (
    <div className="buy-price">
      <a href="/#" className="buy">
        <i className="fas fa-shopping-cart"></i>Añadir al carrito
      </a>
      <div className="price">
        <i className="fas fa-dollar-sign"></i>
        <h1>149.99</h1>
      </div>
    </div>
  );

  return (
    <div className="info">
      {shoeName}
      {description}
      {BuySection}
    </div>
  );
};

export default Info;
