import { createContext, useState, useEffect } from "react";
import { mobs as data } from "../data/mobs";

export const MultipleContext = createContext();

export function MultipleContextProvider(props) {
  const [mobs, setMobs] = useState([]);

  useEffect(() => {
    setMobs(data);
  }, []);

  return (
    <MultipleContext.Provider value={{mobs}}>
      {props.children}
    </MultipleContext.Provider>
  );
}
