
import './App.css';
//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";

//Componets
import { Temp } from "./Components/Temp";
import { Master } from "./Components/Master"


function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={Temp}></HomeLayoutHOC>
      <HomeLayoutHOC path="/:type" exact component={Master}></HomeLayoutHOC>
    </>
  );
}

export default App;
