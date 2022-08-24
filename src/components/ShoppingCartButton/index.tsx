import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./styles.css";

const ShoppingCartButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/cart");
  };

  const setShoppingCart = useSelector((state: any) => state.setShoppingCart);

  return (
    <button type="button" onClick={handleClick} className="btn-shop">
      <AiOutlineShoppingCart />
      <span>{setShoppingCart?.shoppingCart?.length || 0}</span>
    </button>
  );
}

export default ShoppingCartButton;
