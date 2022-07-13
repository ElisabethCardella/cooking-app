import Layout from "../../components/Layout";
import { Heading } from "@chakra-ui/react";
import { useContext } from "react";
import FavoritesRecipesContext from "../../store/FavoriteRecipesContext";
import MealItem from "../../components/Meals/MealItem";

function FavouritePage() {
  const ctx = useContext(FavoritesRecipesContext);
  console.log(ctx.favouriteRecipes);

  return (
    <Layout>
      <Heading>My favourites recipies</Heading>

      {ctx.favouriteRecipes.map((recipe) => (
        <MealItem key={recipe.id} recipe={recipe} />
      ))}
    </Layout>
  );
}

export default FavouritePage;
