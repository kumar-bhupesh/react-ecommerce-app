import React from "react";
import "./quantityBox.css";
import { FaMinus, FaPlus } from "react-icons/fa";

const QuantityBox = ({ item, onQuantityChange }) => {
  return (
    <div className="quantity-box">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onQuantityChange(item.id, -1)}
        disabled={item.quantity === 1}
      >
        <FaMinus />
      </button>
      <span className="quantity-box__quantity-count"> {item.quantity}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onQuantityChange(item.id, 1)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default QuantityBox;
