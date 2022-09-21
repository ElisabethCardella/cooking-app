import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { getRecipes } from "../../services/recipesService";
import RecipesContext from "../../store/RecipesContext";
import MealItem from "../Meals/MealItem";
import UserContext from "../../store/UserContext";

const MyOwnRecipesComponent = () => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { user } = useContext(UserContext);
  // const [showExternalRecipes, setShowExternalRecipes] = useState(false);

  useEffect(() => {
    getRecipes(false, undefined, undefined, user).then((data) =>
      setRecipes(data)
    );
  }, []);

  return (
    <Container
      display="flex"
      justifyContent="center"
      flexWrap="wrap"
      maxWidth="100%"
    >
      {recipes.map((recipe) => (
        <MealItem key={recipe.id} recipe={recipe} />
      ))}
    </Container>
  );
};

export default MyOwnRecipesComponent;
