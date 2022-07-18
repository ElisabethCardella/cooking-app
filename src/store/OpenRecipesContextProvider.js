import { useState } from "react";
import OpenRecipesContext from "./OpenRecipesContext";

const OpenRecipesContextProvider = (props) => {
  const [openRecipe, setOpenRecipe] = useState([]);

  return (
    <OpenRecipesContext.Provider value={{ openRecipe, setOpenRecipe }}>
      {props.children}
    </OpenRecipesContext.Provider>
  );
};

export default OpenRecipesContextProvider;
