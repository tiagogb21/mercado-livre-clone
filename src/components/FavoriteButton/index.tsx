import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

import "./styles.css";

interface ButtonProps {
  id: string;
}

const FavoriteButton: React.FC<ButtonProps> = ({ id }) => {
  const [verifyClick, setVerifyClick] = useState(true);
  const [dataFromLocal, setDataFromLocal] = useState([]);

  const dispatch = useDispatch();
  const { addProductsToFavorite, removeProductsFromFavorite } =
    bindActionCreators(actionCreators, dispatch);

  const location = useLocation();

  useEffect(() => {
    const getFromLocal = localStorage.getItem("favorite") || '';
    const getItemFromLocal = JSON.parse(getFromLocal) || [];
    setDataFromLocal(getItemFromLocal);
    if (getItemFromLocal.length > 0) {
      const t = getItemFromLocal.filter(
        (item: string) => item === location.pathname.split("/")[2]
      );
      if (t.length > 0) {
        setVerifyClick(false);
      }
    }
  }, []);

  const handleClick = () => {
    verifyClick ? addProductsToFavorite(id) : removeProductsFromFavorite(id);
    const getItemFromLocal = dataFromLocal || [];
    if (verifyClick) {
      const findItemInLocal = getItemFromLocal?.filter((item: string) => item === id);
      if (findItemInLocal.length === 0) {
        localStorage.setItem(
          "favorite",
          JSON.stringify([...getItemFromLocal, id])
        );
      }
    } else {
      const removeItemFromLocal = getItemFromLocal?.filter(
        (item) => item !== id
      );
      localStorage.setItem(
        "favorite",
        JSON.stringify([...removeItemFromLocal])
      );
    }
    setVerifyClick((prev) => !prev);
  };

  return (
    <button className="favorite-btn" onClick={handleClick}>
      {verifyClick ? <AiOutlineHeart /> : <AiFillHeart />}
    </button>
  );
}

export default FavoriteButton;
