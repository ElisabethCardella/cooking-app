import { SearchIcon } from "@chakra-ui/icons";
import {
  Center,
  Container,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { useEffect, useContext, useState } from "react";
import { getRecipes } from "../../services/recipesService";
import CuisinesContext from "../../store/CuisinesContext";
import RecipesContext from "../../store/RecipesContext";
import UserContext from "../../store/UserContext";
import MealItem from "../Meals/MealItem";
import AddMyRecipeButton from "./AddMyRecipeButton/AddMyRecipeButton";
import classes from "./index.module.scss";

const Selector = () => {
  const { cuisines } = useContext(CuisinesContext);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { user } = useContext(UserContext);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [enteredText, setEnteredText] = useState(null);
  const [showExternalRecipes, setShowExternalRecipes] = useState(false);

  useEffect(() => {
    getRecipes(showExternalRecipes, enteredText, selectedCuisine, user).then(
      (data) => setRecipes(data)
    ); //the order is matter and not the name of it
  }, [selectedCuisine, enteredText, showExternalRecipes]);

  const onClickActivateExternalRecipes = () => {
    setShowExternalRecipes(!showExternalRecipes);
  };

  const onChangeHandler = (event) => {
    setSelectedCuisine(event.target.value);
    console.log(event.target.value);
  };

  const onChangeTextHandler = (event) => {
    setTimeout(() => {
      setEnteredText(event.target.value);
    }, 3000);
  };

  console.log(recipes);

  return (
    <Container height="100%" maxWidth="100%" className={classes.container}>
      <Container>
        <Stack className={classes.stack}>
          <Heading fontFamily="QuickSand" fontWeight="bold">
            Search by Cuisine
          </Heading>
          <AddMyRecipeButton />
        </Stack>

        <Center marginTop="20px" alignItems="baseline" justifyContent="center">
          <FormLabel textAlign="right">My own recipes</FormLabel>
          <Switch
            margin="auto"
            colorScheme="teal"
            size="lg"
            onChange={onClickActivateExternalRecipes}
            isChecked={showExternalRecipes}
          />
          <FormLabel margin="10px">Discover recipes</FormLabel>
        </Center>

        {showExternalRecipes && cuisines?.length > 0 && (
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
      </Container>
    </Container>
  );
};

export default Selector;
