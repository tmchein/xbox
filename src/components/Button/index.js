import React from "react";
import style from "./Button.module.scss";

const Button = ({ text }) => {
  return (
    <>
      {text && <button className={style.o_button}>{text}</button>}
      {!text && (
        <button>
          <img src="#" alt="updown" />
        </button>
      )}
    </>
  );
};

export default Button;
