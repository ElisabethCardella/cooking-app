import Layout from "../../components/Layout";
import { Container, Heading, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import FavoritesRecipesContext from "../../store/FavoriteRecipesContext";
import MealItem from "../../components/Meals/MealItem";
import AddMyRecipeButton from "../../components/Selector/AddMyRecipeButton/AddMyRecipeButton";

function FavouritePage() {
  const ctx = useContext(FavoritesRecipesContext);
  console.log(ctx.favouriteRecipes);

  return (
    <Layout>
      <Container height="100%" w="100%">
        <Stack spacing={8} direction="row" justifyContent="space-between">
          <Heading as="h2" p="4" fontFamily="QuickSand" fontWeight="bold">
            My favourites Recipes
          </Heading>
          <AddMyRecipeButton />
        </Stack>

        {ctx.favouriteRecipes.map((recipe) => (
          <MealItem key={recipe.id} recipe={recipe} />
        ))}
      </Container>
    </Layout>
  );
}

export default FavouritePage;
