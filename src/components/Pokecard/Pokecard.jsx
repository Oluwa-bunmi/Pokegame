import "./Pokecard.css";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let approximate = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;
const Pokecard = ({ id, name, type, exp }) => {
  let imgSrc = `${POKE_API}${approximate(id)}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{name}</h1>
      <div className="Pokecard-img">
        <img src={imgSrc} alt={name} />
      </div>
      <div className="Pokecard-data">Type: {type}</div>
      <div className="Pokecard-data">EXP: {exp}</div>
    </div>
  );
};

export default Pokecard;
