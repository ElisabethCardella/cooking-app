import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { getRecipes } from "../../services/recipeService";

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

  return (
    <div>
      <Select
        onChange={(e) => setSelectedCountry(e.target.value)}
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
        <ul>
          <li value={recipe}> {recipe.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Selector;
