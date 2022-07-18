import React from "react";

const OpenRecipesContext = React.createContext({
  openRecipe: null,
  setOpenRecipe: (open) => {},
});

export default OpenRecipesContext;
