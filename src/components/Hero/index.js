import React from "react";
import Button from "../Button";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={style.o_main_container}>
      <div className={style.o_hero_content}>
        <h1>Games play best on Xbox One</h1>
        <p>
          Play over <strong>1,300 games</strong> on the only consoles designed
          to play the best games of the past, present and future.
        </p>
        <Button text="LEARN MORE" />
      </div>
      <img src="/resources/xbox_controller.png" alt="xbox controller" />
    </div>
  );
};

export default Hero;
