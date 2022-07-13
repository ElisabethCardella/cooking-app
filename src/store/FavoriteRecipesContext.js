import React from "react";

const FavoriteRecipesContext = React.createContext({
  favouriteRecipes: [],
  setFavouriteRecipes: (favourites) => {},
});

export default FavoriteRecipesContext;
