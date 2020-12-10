import { React, useState, useRef } from "react";

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

const NavOption = ({ name }) => {
  //Inicializando los select con los valores de los array definidos arriba
  const [consoleData, setconsoleData] = useState(consoleDataArray);
  const [communityData, setcommunityData] = useState(communityDataArray);
  const [gameData, setGameData] = useState(gameDataArray);
  const selectRef = useRef(null);

  const handleOver = () => {
    let n = selectRef.current.options.length;
    selectRef.current.size = n;
  };

  const handleLeave = () => {
    selectRef.current.size = 0;
  };

  return (
    <>
      {name === "Consoles" && (
        <select
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          ref={selectRef}
        >
          <option value="">Consoles</option>
          {consoleData.map((consoles) => (
            <option key={consoles.id} value={consoles.name}>
              {consoles.name}
            </option>
          ))}
        </select>
      )}

      {name === "Community" && (
        <select
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          ref={selectRef}
        >
          <option value="">Community</option>
          {communityData.map((community) => (
            <option key={community.id} value={community.name}>
              {community.name}
            </option>
          ))}
        </select>
      )}

      {name === "Games" && (
        <select
          onMouseOver={handleOver}
          onMouseLeave={handleLeave}
          ref={selectRef}
        >
          <option value="">Games</option>
          {gameData.map((game) => (
            <option key={game.id} value={game.name}>
              {game.name}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default NavOption;
