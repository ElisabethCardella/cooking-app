import { StarIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import Card from "../UI/Card/Card";
import classes from "./MealItem.module.css";
import { BiHeart } from "react-icons/bi";
import { useContext } from "react";
import FavoriteRecipesContext from "../../store/FavoriteRecipesContext";

const MealItem = (props) => {
  const { favouriteRecipes, setFavouriteRecipes } = useContext(
    FavoriteRecipesContext
  );

  const onClickHandler = () => {
    const updatedFavouriteRecipes = [...favouriteRecipes];

    if (
      !updatedFavouriteRecipes.some((recipe) => recipe.id === props.recipe.id) // if recipe is not in favourites, then push
    ) {
      updatedFavouriteRecipes.push(props.recipe);
    }

    setFavouriteRecipes(updatedFavouriteRecipes);
  };
  return (
    <Card className={classes.meal}>
      <img
        className={classes.img}
        src={props.recipe.image}
        alt={props.recipe.name}
      />
      <div className={classes.titledescription}>
        <h3 className={classes.title}>{props.recipe.name}</h3>
        <div className={classes.description}>{props.recipe.description}</div>
      </div>
      <div className={classes.options}>
        <div className={classes["icon-wrapper"]} onClick={onClickHandler}>
          <BiHeart
            className={classes.icon}
            fontSize="25"
            color="red"
            fill="currentColor"
          />
        </div>
        <Button>Show recipe</Button>
        <StarIcon color="red.500" />
        {props.numberOfReviews} reviews
      </div>
    </Card>
  );
};

export default MealItem;
