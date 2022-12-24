import "./Pokedex.css";
import Pokecard from "../Pokecard/Pokecard";
const Pokedex = () => {
  const data = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 62 },
    { id: 11, name: "Metapod", type: "bug ", base_experience: 62 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 62 },
    { id: 12, name: "Pickachu", type: "electric", base_experience: 112 },
    { id: 12, name: "Eevee", type: "electric", base_experience: 112 },
    { id: 12, name: "Gengar", type: "electric", base_experience: 112 },
    { id: 12, name: "Metapod", type: "electric", base_experience: 112 },
    { id: 12, name: "Jigglypuff", type: "electric", base_experience: 112 },
  ];
  return (
    
    <div className="Pokedex">
      <h1>Pokedex</h1>
      <div className="Pokedex-cards">
        {data.map(({ id, name, type, base_experience }) => {
          return (
            <Pokecard name={name} id={id} type={type} exp={base_experience} />
          );
        })}
      </div>
    </div>
  );
};

export default Pokedex;
