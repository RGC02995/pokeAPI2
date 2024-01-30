import { useEffect, useState } from "react";
import "./Pokemon.module.css";
import { useContext } from "react";
import { InputContext } from "./context/InputValueProvider";
import classes from "../components/Pokemon.module.css";

function Pokemon() {
  const { inputValue } = useContext(InputContext);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState("");
  const [pokemonFront, setPokemonFront] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setPokemon(data);
        setPokemonFront(data.sprites.front_default);
        console.log(data);
      });
  }, [inputValue]);

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div style={{ margin: 20 }}>
          <div className={classes.wrapperPokemonInfo}>
            <h1 className={classes.upperText}>{pokemon.name}</h1>
            <img
              className={classes.imgPokemon}
              src={pokemonFront}
              alt={inputValue}
            />
            <div className={classes.listStats}>
              <h3>Basic Stats:</h3>
              <ul>
                {pokemon.stats.map((stat, index) => (
                  <li key={index}>{`${stat.stat.name}: ${stat.base_stat}`}</li>
                ))}
              </ul>
              {pokemon.types.map((types, index) => (
                <button className={classes[types.type.name]} style={{marginLeft:15, marginTop:10, padding:".5em", width:80}} key={index}>{`${types.type.name}`}</button>
              ))}
            </div>
            <div className={classes.orderPokemon}>
              <h3>{`Nº ${pokemon.order}`}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
