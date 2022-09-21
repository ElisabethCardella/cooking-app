import { CheckCircleIcon } from "@chakra-ui/icons";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { getFavouriteRecipes } from "../../services/recipesService";
import RecipesContext from "../../store/RecipesContext";
import UserContext from "../../store/UserContext";
import MealItem from "../Meals/MealItem";

const FavouriteRecipesComponent = () => {
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getFavouriteRecipes(user).then((data) => setRecipes(data));
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
    // <Container>
    //   <Box textAlign="center" py={10} px={6}>
    //     <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
    //     <Heading as="h2" size="xl" mt={6} mb={2}>
    //       In progress
    //     </Heading>
    //     <Text color={"gray.500"}>Coming soon !</Text>
    //   </Box>
    // </Container>
  );
};

export default FavouriteRecipesComponent;
