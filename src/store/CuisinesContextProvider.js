import { useState } from "react";
import CuisinesContext from "./CuisinesContext";

const CuisinesContextProvider = (props) => {
  const [cuisines, setCuisines] = useState([]);

  return (
    <CuisinesContext.Provider value={{ cuisines, setCuisines }}>
      {props.children}
    </CuisinesContext.Provider>
  );
};

export default CuisinesContextProvider;
