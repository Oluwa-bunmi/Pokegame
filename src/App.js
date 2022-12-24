import "./App.css";
import Pokecard from "./components/Pokecard/Pokecard";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  return (
    <div className="App">
      {/* <Pokecard id={2} name="Charmander" type="fire" exp={62} /> */}
      <Pokedex />
    </div>
  );
}

export default App;
