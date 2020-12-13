import React from "react";
import NavOption from "./NavOption";
import style from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={style.o_main_container}>
      <img
        className={style.o_microsoft_logo}
        src="/resources/microsoft_logo.svg"
        alt="Microsoft logo"
      />
      <img
        className={style.o_xbox_logo}
        src="/resources/xbox-logo-5.png"
        alt="Xbox logo"
      />

      <div className={style.o_option_container}>
        <NavOption name="Consoles" />
        <NavOption name="Games" />
        <NavOption name="Community" />
        <NavOption name="Accesories" extra />
      </div>

      <div className={style.o_search_container}>
        <input type="text" placeholder="Search" />
        <img src="/resources/mg.svg" alt="search" />
      </div>

      <img
        className={style.o_user_icon}
        src="/resources/usericon.svg"
        alt="my profile"
      />
    </nav>
  );
};

export default NavBar;
