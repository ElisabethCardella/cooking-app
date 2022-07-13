import { Select } from "@chakra-ui/react";
import { useState, useEffect, useContext } from "react";

import { getRecipes } from "../../services/recipeService";
import FavoriteRecipesContext from "../../store/FavoriteRecipesContext";
import MealItem from "../Meals/MealItem";

const Selector = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((resp) => resp.json())
      .then((data) => setCountries(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  //useEffect, it happens ones)
  useEffect(() => {
    setRecipes(getRecipes(selectedCountry));
  }, [selectedCountry]);

  //if the selectedCountry changes, it run again,
  //if there is nothing, it will run only one time

  const onChangeHandler = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div>
      <Select
        onChange={onChangeHandler}
        id="countries"
        placeholder="I want to cook a recipe from ..."
      >
        {countries
          .sort((countryA, countryB) =>
            countryA.name.common.localeCompare(countryB.name.common)
          )
          .map((country, index) => (
            <option value={country.name.common} key={index}>
              {country.name.common}
            </option>
          ))}
      </Select>

      {recipes.map((recipe) => (
        <MealItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Selector;
