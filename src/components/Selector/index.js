import { Input, Select } from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";
import CuisinesContext from "../../store/CuisinesContext";
import RecipesContext from "../../store/RecipesContext";
import MealItem from "../Meals/MealItem";

const Selector = () => {
  const { cuisines, setCuisines } = useContext(CuisinesContext);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [enteredText, setEnteredText] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/cuisines")
      .then((resp) => resp.json())
      .then((data) => setCuisines(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  useEffect(() => {
    let url = "http://localhost:4000/recipes";

    if (enteredText) {
      url += "?text=" + enteredText;
    }

    if (selectedCuisine) {
      url += "?cuisine=" + selectedCuisine;
    }

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log("Error:", err));
  }, [selectedCuisine, enteredText]);

  const onChangeHandler = (event) => {
    setSelectedCuisine(event.target.value);
    console.log(event.target.value);
  };

  const onChangeTextHandler = (event) => {
    setTimeout(() => {
      setEnteredText(event.target.value);
    }, 3000);
  };

  return (
    <div>
      <Input onChange={onChangeTextHandler}></Input>
      {cuisines?.length > 0 && (
        <Select
          margin="10px"
          onChange={onChangeHandler}
          id="countries"
          placeholder="I want to cook a recipe from ..."
        >
          {cuisines
            .sort((cuisineA, cuisineB) => cuisineA.localeCompare(cuisineB))
            .map((cuisine, index) => (
              <option value={cuisine} key={index}>
                {cuisine[0].toUpperCase() + cuisine.substring(1)}
              </option>
            ))}
        </Select>
      )}
      {recipes.map((recipe) => (
        <MealItem key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Selector;
