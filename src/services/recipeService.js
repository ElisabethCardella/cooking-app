export const getRecipes = (countryFilter) => {
  return [
    {
      name: "pierogi",
      country: "Poland",
    },
    {
      name: "gratin",
      country: "France",
    },
    {
      name: "cheese",
      country: "France",
    },
  ].filter((recipe) => recipe.country === countryFilter || !countryFilter);

  //when there is a filter, e need to put the condition in the function
};
