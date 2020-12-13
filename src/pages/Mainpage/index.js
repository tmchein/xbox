import GameCard from "../../components/GameCard";
import Hero from "../../components/Hero";
import NavBar from "../../components/NavBar/index";
import style from "./mainpage.module.scss";

const Mainpage = () => {
  return (
    <div className={style.o_main_container}>
      <NavBar />
      <Hero />
      <div className={style.o_game_container}>
        <GameCard
          img="https://i.redd.it/fw52rx3417231.jpg"
          title="Borderlands 3"
          description="Mayhem is comming"
        />
        <GameCard
          img="https://media.gamestop.com/i/gamestop/10132012/Microsoft-Xbox-One-Polar-White-Wireless-Controller"
          title="Xbox Design Lab"
          description="Design your controller"
        />
        <GameCard
          img="https://esports.as.com/2020/04/21/bonus/Minecraft-puede-manera-gratuita-navegador_1348085179_378890_1024x576.jpg"
          title="Minecraft"
          description="Play with Xbox Game Pass"
        />
      </div>
    </div>
  );
};

export default Mainpage;
