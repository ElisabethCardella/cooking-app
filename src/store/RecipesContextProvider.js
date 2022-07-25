import { useState } from "react";
import RecipesContext from "./RecipesContext";

const RecipesContextProvider = (props) => {
  const [recipes, setRecipes] = useState([]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesContextProvider;
