import { useEffect, useState } from "react";
import { backendUrl } from "../helpers/backendUrl";
import CuisinesContext from "./CuisinesContext";

const CuisinesContextProvider = (props) => {
  const [cuisines, setCuisines] = useState([]);

  useEffect(() => {
    fetch(backendUrl + "/cuisines")
      .then((resp) => resp.json())
      .then((data) => setCuisines(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <CuisinesContext.Provider value={{ cuisines, setCuisines }}>
      {props.children}
    </CuisinesContext.Provider>
  );
};

export default CuisinesContextProvider;
