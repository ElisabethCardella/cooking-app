import React from "react";

const FavoriteRecipesContext = React.createContext({
  favouriteRecipes: [],
  setFavouriteRecipes: (favourites) => {},
  totalAmount: 0,
});

export default FavoriteRecipesContext;
