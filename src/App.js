import style from "./App.module.scss";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Mainpage from "./pages/Mainpage/index";

function App() {
  return (
    <div className={style.o_main_container}>
      <Mainpage />
    </div>
  );
}

export default App;
