import { React, useState } from "react";
import style from "./NavOption.module.scss";

const consoleDataArray = [
  { name: "Xbox360", id: 1 },
  { name: "Xbox One", id: 2 },
  { name: "Xbox Serie X", id: 3 },
];
const communityDataArray = [{ name: "Xbox forum", id: 1 }];
const gameDataArray = [
  { name: "Game Pass", id: 1 },
  { name: "Game Pass Ultimate", id: 2 },
];

const NavOption = ({ name, extra }) => {
  //Inicializando los select con los valores de los array definidos arriba
  const [consoleData, setconsoleData] = useState(consoleDataArray);
  const [communityData, setcommunityData] = useState(communityDataArray);
  const [gameData, setGameData] = useState(gameDataArray);

  return (
    <>
      {name === "Consoles" && (
        <div className={style.o_dropdown_container}>
          <button className={style.o_dropdown_button}>
            Consoles <img src="/resources/dropdownicon.svg" alt="dropdown" />
          </button>
          <div className={style.o_dropdown_content}>
            {consoleData.map((consoles) => (
              <button key={consoles.id}>{consoles.name}</button>
            ))}
          </div>
        </div>
      )}

      {name === "Community" && (
        <div className={style.o_dropdown_container}>
          <button className={style.o_dropdown_button}>
            Community <img src="/resources/dropdownicon.svg" alt="dropdown" />
          </button>
          <div className={style.o_dropdown_content}>
            {communityData.map((community) => (
              <button key={community.id}>{community.name}</button>
            ))}
          </div>
        </div>
      )}

      {name === "Games" && (
        <div className={style.o_dropdown_container}>
          <button className={style.o_dropdown_button}>
            Games <img src="/resources/dropdownicon.svg" alt="dropdown" />
          </button>
          <div className={style.o_dropdown_content}>
            {gameData.map((games) => (
              <button key={games.id}>{games.name}</button>
            ))}
          </div>
        </div>
      )}

      {extra && (
        <div className={style.o_dropdown_container}>
          <button className={style.o_dropdown_button}>
            {name} <img src="/resources/dropdownicon.svg" alt="dropdown" />
          </button>
          <div className={style.o_dropdown_content}></div>
        </div>
      )}
    </>
  );
};

export default NavOption;
