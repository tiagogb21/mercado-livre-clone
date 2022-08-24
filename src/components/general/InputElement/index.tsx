import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface InputProps {
  type: string;
  placeholder: string;
  className: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, className }) => {
  return (
    <label htmlFor="" className={className}>
      <input type={type} placeholder={placeholder} />
      <button type="button">
        <AiOutlineSearch />
      </button>
    </label>
  );
}

export default Input;
