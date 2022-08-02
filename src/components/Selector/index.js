import { PhoneIcon, SearchIcon } from "@chakra-ui/icons";
import {
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
import CuisinesContext from "../../store/CuisinesContext";
import RecipesContext from "../../store/RecipesContext";
import UserContext from "../../store/UserContext";
import MealItem from "../Meals/MealItem";
import AddMyRecipeButton from "./AddMyRecipeButton/AddMyRecipeButton";

const Selector = () => {
  const { cuisines } = useContext(CuisinesContext);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { user, setUser } = useContext(UserContext);
  const [selectedCuisine, setSelectedCuisine] = useState(null);
  const [enteredText, setEnteredText] = useState(null);
  const [showExternalRecipes, setShowExternalRecipes] = useState(false);
  const [showInternalRecipes, setShowInternalRecipes] = useState(false);

  console.log(user);

  useEffect(() => {
    let url = "http://localhost:4000/recipes";

    if (showExternalRecipes) {
      url += "?type=external";
    } else {
      url += "?type=internal&userId=" + user._id;
    }

    if (enteredText) {
      url += "&text=" + enteredText;
    }

    if (selectedCuisine) {
      url += "&cuisine=" + selectedCuisine;
    }

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.log("Error:", err));
  }, [selectedCuisine, enteredText]);

  const onChangeExternalRecipes = () => {
    setShowExternalRecipes(!showExternalRecipes);
  };

  const onClickInternalRecipes = () => {
    setShowInternalRecipes(!showInternalRecipes);
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
    <Container height="100%" w="100%">
      <Stack spacing={8} direction="row" justifyContent="space-between">
        <Heading as="h2" p="4" fontFamily="QuickSand" fontWeight="bold">
          Search by Cuisine
        </Heading>
        <AddMyRecipeButton />
      </Stack>

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

      <Stack
        margin={10}
        spacing={8}
        direction="row"
        justifyContent="space-between"
      >
        <Stack align="center" direction="row">
          <FormLabel>My own recipes</FormLabel>
          <Switch
            colorScheme="teal"
            size="lg"
            onChange={onClickInternalRecipes}
          />
        </Stack>

        <Stack align="center" direction="row">
          <FormLabel>Discover more recipes</FormLabel>
          <Switch
            onChange={onChangeExternalRecipes}
            colorScheme="teal"
            size="lg"
          />
        </Stack>
      </Stack>

      {showInternalRecipes && (
        <Container display="flex" flexWrap="wrap" maxWidth="100%">
          {recipes.map((recipe) => (
            <MealItem key={recipe.id} recipe={recipe} />
          ))}
        </Container>
      )}

      {showExternalRecipes && cuisines?.length > 0 && (
        <Select
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
      )}
      {/* <Container display="flex" flexWrap="wrap" maxWidth="100%">
        {recipes.map((recipe) => (
          <MealItem key={recipe.id} recipe={recipe} />
        ))}
      </Container> */}
    </Container>
  );
};

export default Selector;
