import { useState } from "react";
import classes from "./navbar.module.css";
import { useContext } from "react";
import { InputContext } from "../context/InputValueProvider";
import { useRef } from "react";
import Pokemon from "../Pokemon";

function Navbar() {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  const inputRef = useRef(null);
  const [showPokemon, setShowPokemon] = useState(false);
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputValue = (e) => {
    e.preventDefault();
    setInputValue(inputRef.current.value.toLowerCase());
    setShowPokemon(true);
  };

  const onHandleReload = () => {
    window.location.reload()
  }

  console.log("showPokemon", showPokemon);
  return (
    <div>
      <div className={classes.navbar}>
        <img src={imgUrl} alt="logo-pokeapi"></img>

        <button onClick={onHandleReload} className={classes.buttonStyleInit}>Inicio</button>

        <div className={classes.wrapperInput}>
          <input
            ref={inputRef}
            type="text"
            name="search"
            placeholder="Escribe el Pokémon AQUÍ"
            className={classes.inputStyleSearch}
          ></input>
          <button onClick={handleInputValue} className={classes.buttonStyle}>
            Buscar
          </button>
        </div>
      </div>
      {showPokemon && <Pokemon />}
    </div>
  );
}

export default Navbar;
