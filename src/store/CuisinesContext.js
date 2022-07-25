import React from "react";

const CuisinesContext = React.createContext({
  cuisines: [],
  setCuisines: () => {},
});

export default CuisinesContext;
