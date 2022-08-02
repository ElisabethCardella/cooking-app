import { StarIcon } from "@chakra-ui/icons";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import classes from "./MealItem.module.css";
import { BiHeart } from "react-icons/bi";
import { useContext } from "react";
import FavoriteRecipesContext from "../../store/FavoriteRecipesContext";
import OpenRecipesContext from "../../store/OpenRecipesContext";
import UserContext from "../../store/UserContext";

const MealItem = (props) => {
  const { favouriteRecipes, setFavouriteRecipes } = useContext(
    FavoriteRecipesContext
  );

  const { setOpenRecipe } = useContext(OpenRecipesContext);

  const onClickHandler = () => {
    let updatedFavouriteRecipes = [...favouriteRecipes];

    if (
      !updatedFavouriteRecipes.some((recipe) => recipe.id === props.recipe.id) // if recipe is not in favourites, then push
    ) {
      updatedFavouriteRecipes.push(props.recipe);
    } else {
      updatedFavouriteRecipes = updatedFavouriteRecipes.filter(
        (recipe) => recipe.id !== props.recipe.id
      );
    }

    setFavouriteRecipes(updatedFavouriteRecipes);
  };

  const onShowRecipeHandler = () => {
    return setOpenRecipe(props.recipe);
  };

  return (
    <Box
      p={6}
      m={6}
      maxW={"33.3%"}
      w={"full"}
      // bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      pos={"flex"}
      zIndex={1}
    >
      <Box
        rounded={"lg"}
        mt={-12}
        pos={"relative"}
        height={"230px"}
        _after={{
          transition: "all .3s ease",
          content: '""',
          w: "full",
          h: "full",
          pos: "absolute",
          top: 5,
          left: 0,
          // backgroundImage: `url(${IMAGE})`,
          filter: "blur(15px)",
          zIndex: -1,
        }}
        _groupHover={{
          _after: {
            filter: "blur(20px)",
          },
        }}
      >
        <Image
          rounded={"lg"}
          height={230}
          width={282}
          objectFit={"cover"}
          src={props.recipe.image}
        />
      </Box>
      <Stack fontSize="18px" pt={10} align={"center"} paddingTop="10px">
        <Stack spacing={8} direction="row" justifyContent="space-between">
          <div>
            <StarIcon color="red.500" marginRight="6px" w={4} h={4} />
            {props.recipe.rating} stars
          </div>
          <div className={classes["icon-wrapper"]} onClick={onClickHandler}>
            <BiHeart
              className={classes.icon}
              fontSize="25"
              color={
                favouriteRecipes.find(
                  (favouriteRecipe) => favouriteRecipe.id === props.recipe.id
                )
                  ? "red"
                  : "black"
              }
              fill="currentColor"
            />
          </div>
        </Stack>
        <Heading
          onClick={onShowRecipeHandler}
          fontSize={"2xl"}
          fontFamily={"body"}
          fontWeight={500}
        >
          {props.recipe.name}
        </Heading>
        <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
          READY IN {props.recipe.time} minutes
        </Text>

        <Stack direction={"row"} align={"center"}></Stack>
      </Stack>
    </Box>
  );
};

export default MealItem;
