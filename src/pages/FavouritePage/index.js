import Layout from "../../components/Layout";
import { Container, Heading, Stack } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
// import FavoritesRecipesContext from "../../store/FavoriteRecipesContext";
import MealItem from "../../components/Meals/MealItem";
import AddMyRecipeButton from "../../components/Selector/AddMyRecipeButton/AddMyRecipeButton";
import classes from "./index.module.css";
import { getFavouriteRecipes } from "../../services/recipesService";

import RecipesContext from "../../store/RecipesContext";
import UserContext from "../../store/UserContext";
// import UserContext from "../../store/UserContext";

const FavouritePage = () => {
  // const ctx = useContext(FavoritesRecipesContext);
  // console.log(ctx.favouriteRecipes);

  const { recipes, setRecipes } = useContext(RecipesContext);
  const { user } = useContext(UserContext);
  const [favouritedBy, setFavouritedBy] = useState(false);

  useEffect(() => {
    getFavouriteRecipes(user).then((data) => setRecipes(data));
  }, []);

  return (
    <Layout>
      <Container w="100%" className={classes.container}>
        <Stack classeName={classes.stack}>
          <Heading classeName={classes.heading} id="test">
            My favourites Recipes
          </Heading>
          <Container className={classes.addButton}>
            <AddMyRecipeButton />
          </Container>
        </Stack>

        {recipes.map((recipe) => (
          <MealItem key={recipe.id} recipe={recipe} />
        ))}
      </Container>
    </Layout>
  );
};

export default FavouritePage;
