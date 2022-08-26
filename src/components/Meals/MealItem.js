import { StarIcon } from "@chakra-ui/icons";
import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import classes from "./MealItem.module.scss";
import { BiHeart } from "react-icons/bi";
import { useContext, useState } from "react";
// import FavoriteRecipesContext from "../../store/FavoriteRecipesContext";
import OpenRecipesContext from "../../store/OpenRecipesContext";
import UserContext from "../../store/UserContext";
import RecipesContext from "../../store/RecipesContext";

/*
1. removed the icon because it's fucked
2. stored user in the local storage so don't have to login again after refresh
3. added isFavourite variable to check if recipe is in favourites
4. enabled sending "unfavourite" recipes by adding condition inside onClick
*/

const MealItem = (props) => {
  const { user } = useContext(UserContext);
  const { recipes, setRecipes } = useContext(RecipesContext);

  const { setOpenRecipe } = useContext(OpenRecipesContext);

  const isFavourite = props.recipe?.favouritedBy?.find(
    (favouritedByUserId) => favouritedByUserId === user._id // check if current user favouried this recipe -> colour heart
  );

  console.log(props.recipe);
  console.log(user);

  const onClickHandler = () => {
    let url = "http://localhost:4000/recipes/" + props.recipe._id + "/";

    if (!isFavourite) {
      url += "favourite";
    }

    if (isFavourite) {
      url += "unfavourite";
    }

    console.log(url);

    return fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        userId: user._id,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((updatedRecipe) => {
        // you're doing a favourite action and now we want to show the updated information on the page
        setRecipes(
          recipes.map((recipe) => {
            // go through all recipes and transform them
            if (recipe._id === updatedRecipe._id) {
              // check if recipe was the one which was favourited or unfavourited
              return updatedRecipe; // if this one was updated, replaced old recipe with new one from API
            }

            return recipe;
          })
        );
      });
  };

  const onShowRecipeHandler = () => {
    return setOpenRecipe(props.recipe);
  };

  return (
    <Box
      className={classes.boxItem}
      boxShadow={"2xl"}
      rounded={"lg"}
      // pos={"flex"}
      flexGrow={8}
      width={["180px", "240px"]}
      // zIndex={1}
      display="flex"
      alignItems="center"
    >
      <Box
        rounded={"lg"}
        pos={"relative"}
        paddingBottom="12px"
        // _after={{
        //   transition: "all .3s ease",
        //   content: '""',
        //   w: "full",
        //   h: "full",
        //   pos: "absolute",
        //   top: 5,
        //   left: 0,
        //   // backgroundImage: `url(${IMAGE})`,
        //   filter: "blur(15px)",
        //   zIndex: -1,
        // }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          width="100%"
          maxHeight={180}
          maxWidth={180}
          // objectFit={"cover"}
          src={props.recipe.image}
        />
      </Box>

      <Stack fontSize="18px" pt={10} align={"center"} paddingTop="10px">
        <div onClick={onShowRecipeHandler} className={classes.RecipeMealName}>
          {props.recipe.name}
        </div>
        <Stack spacing={8} direction="row" justifyContent="space-between">
          <div>
            <StarIcon color="red.500" marginRight="6px" w={3} h={3} />
            {props.recipe.rating} stars
          </div>
        </Stack>
        <Button
          fontSize="12px"
          size="sm"
          backgroundColor={isFavourite ? "white" : "#a63760"}
          onClick={onClickHandler}
        >
          {isFavourite ? "Remove from favourites" : "Add to favourites"}
        </Button>
        <Text
          className={classes.timeOfPreparation}
          color={"gray.500"}
          fontSize={"sm"}
          textTransform={"uppercase"}
        >
          READY IN {props.recipe.time} minutes
        </Text>
      </Stack>
    </Box>
  );
};

export default MealItem;
