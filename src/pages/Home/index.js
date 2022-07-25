import Layout from "../../components/Layout";
import { Button, Center, Container, propNames } from "@chakra-ui/react";
import Card from "../../components/UI/Card/Card";
import { useNavigate } from "react-router-dom";
import worldMealImage from "../../assets/img/worldMealImage.jpeg";
import classes from "./Home.module.css";
import WelcomeUser from "../../components/WelcomeUser/WelcomeUser";
import { useContext, useEffect, useState } from "react";
import OpenRecipesContext from "../../store/OpenRecipesContext";
import { getRecipes } from "../../services/recipeService";

function Home() {
  const [randomRecipe, setRandomRecipe] = useState();
  const { setOpenRecipe } = useContext(OpenRecipesContext);

  // useEffect(() => {
  //   const recipes = getRecipes();

  //   setRandomRecipe(recipes[Math.floor(Math.random() * recipes.length)]);
  // }, []);

  const onShowRecipeHandler = () => {
    return setOpenRecipe(randomRecipe);
  };

  return (
    <Layout>
      <WelcomeUser />

      <Container className={classes["summary-recipe-day"]}>
        <h2>Discover the recipe of the day</h2>
        <p>Discover the meal of today to travel all around the world.</p>
        <Container className={classes.container}>
          <img
            className={classes.img}
            alt="pictureindianmeal"
            src="https://vin-champagne.ouest-france.fr/wp-content/uploads/2020/12/cuisine-indienne.jpg"
          />
          <Button onClick={onShowRecipeHandler}>{randomRecipe?.name}</Button>
        </Container>
      </Container>
    </Layout>
  );
}

export default Home;
