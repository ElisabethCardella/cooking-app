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
import RecipesContext from "../../store/RecipesContext";
import CuisinesContext from "../../store/CuisinesContext";

function Home() {
  const [randomRecipe, setRandomRecipe] = useState();
  const [randomCuisine, setRandomCuisine] = useState();
  const { setOpenRecipe } = useContext(OpenRecipesContext);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { cuisines, setCuisines } = useContext(CuisinesContext);

  useEffect(() => {
    if (!cuisines) {
      return;
    }

    let url = "http://localhost:4000/recipes";

    const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];

    // fetch recipes of a random cuisine from backned
    if (randomCuisine) {
      url += "?cuisine=" + randomCuisine;
    }
    fetch(url)
      .then((resp) => resp.json())
      .then((data) =>
        setRandomRecipe(data[Math.floor(Math.random() * data.length)])
      )
      .catch((err) => console.log("Error:", err));
  }, [cuisines]);

  const onShowRecipeHandler = () => {
    return setOpenRecipe(randomRecipe);
  };

  return (
    <Layout>
      <WelcomeUser />

      <Container className={classes["summary-recipe-day"]}>
        <h2>Discover the meal of today to travel all around the world.</h2>
        <Container className={classes.container}>
          <img
            className={classes.img}
            alt="pictureindianmeal"
            src={randomRecipe?.image}
          />
          <Button onClick={onShowRecipeHandler}>{randomRecipe?.name}</Button>
        </Container>
      </Container>
    </Layout>
  );
}

export default Home;
