import "./Pokedex.css";
import Pokecard from "../Pokecard/Pokecard";
const Pokedex = ({ pokemon, exp, isWinner }) => {
  let title;
  if (isWinner) {
    title = <h1 className="Pokedex-winner">WINNER</h1>;
  } else {
    title = <h1 className="Pokedex-loser">LOSER</h1>;
  }

  return (
    <div className="Pokedex">
      {title}
      <h4>Total Experience: {exp}</h4>
      <div className="Pokedex-cards">
        {pokemon.map((poke) => (
          <Pokecard
            id={poke.id}
            name={poke.name}
            type={poke.type}
            exp={poke.base_experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
