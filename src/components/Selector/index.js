import { SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";
import { getRecipes } from "../../services/recipesService";
import CuisinesContext from "../../store/CuisinesContext";
import OpenRecipesContext from "../../store/OpenRecipesContext";
import RecipesContext from "../../store/RecipesContext";
import UserContext from "../../store/UserContext";
import MealItem from "../Meals/MealItem";
import RandomMealItem from "../RandomMealItem/RandomMealItem";

import classes from "./index.module.scss";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const Selector = () => {
  const { user } = useContext(UserContext);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [enteredText, setEnteredText] = useState(null);
  const [showExternalRecipes, setShowExternalRecipes] = useState(false);
  const { setOpenRecipe } = useContext(OpenRecipesContext);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { cuisines, setCuisines } = useContext(CuisinesContext);
  console.log(showExternalRecipes);
  const [randomRecipe, setRandomRecipe] = useState();

  useEffect(() => {
    getRecipes("external", enteredText, selectedCuisine, user).then((data) =>
      setRecipes(data)
    ); //the order is matter and not the name of it
  }, [selectedCuisine, enteredText, showExternalRecipes]);

  // const onClickActivateExternalRecipes = () => {
  //   setShowExternalRecipes(!showExternalRecipes);
  // };

  const onChangeHandler = (event) => {
    setSelectedCuisine(event.target.value);
    console.log(event.target.value);
  };

  const onChangeTextHandler = (event) => {
    setTimeout(() => {
      setEnteredText(event.target.value);
    }, 3000);
  };

  const onShowRecipeHandler = () => {
    return setOpenRecipe(randomRecipe);
  };

  console.log(recipes);

  return (
    <Container height="100%" maxWidth="100%">
      <Container>
        <Stack className={classes.stack}>
          <Heading fontFamily="QuickSand" fontWeight="bold" margin={"20px"}>
            Search by Cuisine
          </Heading>
        </Stack>

        {/* <Center marginTop="20px" alignItems="baseline" justifyContent="center">
          <FormLabel textAlign="right">My own recipes</FormLabel>
          <Switch
            margin="auto"
            colorScheme="teal"
            size="lg"
            onChange={onClickActivateExternalRecipes}
            isChecked={showExternalRecipes}
          />
          <FormLabel margin="10px">Discover recipes</FormLabel>
        </Center> */}

        {cuisines?.length > 0 && (
          <>
            <InputGroup spacing={4}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                onChange={onChangeTextHandler}
                placeholder="Type a name of meal or cuisine"
              ></Input>
            </InputGroup>

            <Select
              marginTop="10px"
              onChange={onChangeHandler}
              id="countries"
              placeholder="I choose a cuisine from ..."
            >
              {cuisines
                .sort((cuisineA, cuisineB) => cuisineA.localeCompare(cuisineB))
                .map((cuisine, index) => (
                  <option value={cuisine} key={index}>
                    {cuisine[0].toUpperCase() + cuisine.substring(1)}
                  </option>
                ))}
            </Select>
          </>
        )}
      </Container>
      <Container
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        maxWidth="100%"
        marginTop="20px"
        marginLeft="0"
        padding="0"
      >
        {recipes.map((recipe) => (
          <MealItem key={recipe.id} recipe={recipe} />
        ))}
        {recipes.length === 0 && <RandomMealItem maxWidth="900px" />}
      </Container>
    </Container>
  );
};

export default Selector;
