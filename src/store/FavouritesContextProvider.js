import { useState } from "react";
import FavoriteRecipesContext from "./FavoriteRecipesContext";

const FavoriteRecipeContextProvider = (props) => {
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);

  return (
    <FavoriteRecipesContext.Provider
      value={{ favouriteRecipes, setFavouriteRecipes }}
    >
      {props.children}
    </FavoriteRecipesContext.Provider>
  );
};

export default FavoriteRecipeContextProvider;
