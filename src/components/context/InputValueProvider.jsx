import { createContext } from "react";
import { useState } from "react";


export const InputContext = createContext()

function InputValueProvider(props) {
  const [inputValue, setInputValue] = useState("bulbasaur")

  return (
    <InputContext.Provider value={{inputValue,setInputValue}}>
      {props.children}
    </InputContext.Provider>
  );
}

export default InputValueProvider;
