import React from "react";
import "./Button.css";

const Button = ({ clickAddButtonHandler }) => {
  return (
    <button onClick={clickAddButtonHandler} className="input-button">
      🛎️
    </button>
  );
};

export default Button;
