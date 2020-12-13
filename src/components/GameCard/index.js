import React from "react";
import style from "./GameCard.module.scss";

const GameCard = ({ img, title, description }) => {
  return (
    <div className={style.o_card_container}>
      <img src={img} alt={title} />
      <div className={style.o_card_content}>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <p>More &gt;</p>
      </div>
    </div>
  );
};

export default GameCard;
