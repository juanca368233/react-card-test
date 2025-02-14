import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Info = () => {
  const handleAddToCart = () => {
    toast.success("¡Producto añadido al carrito!", {
      position: "top-left",
      autoClose: 3000,
    });
  };
  
  // Tarjeta de informaci[on con estrellas
  const shoeName = (
    <div className="shoeName">
      <h3 className="small">Herramientas de gestión</h3>
      <div>
        <h1 className="big">Producto 1</h1>
      </div>
      <div className="flex gap-1">
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaStar className="star" />
        <FaRegStar className="star-fill" />
      </div>
      <h3 className="title">$2'500.000</h3>
    </div>
  );

  const description = (
    <div className="description">
      <p className="text">
        Todo lo que necesitas para tu gestión de manera
        <b className="boldfont"> integrada y optimizada.</b>
      </p>
    </div>
  );

  // Funcion onclick para generar alerta
  const BuySection = (
    <div className="buy-price">
      <a href="/#" className="buy" onClick={handleAddToCart}>
        <i className="fas fa-shopping-cart"></i>Añadir al carrito
      </a>
      <div className="price">
        <p>- 1 +</p>
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
