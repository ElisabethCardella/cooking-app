import Layout from "../../components/Layout";
import { Box, Center, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import OpenRecipesContext from "../../store/OpenRecipesContext";
import { getRecipes } from "../../services/recipesService";
import RecipesContext from "../../store/RecipesContext";
import CuisinesContext from "../../store/CuisinesContext";
import { TimeIcon } from "@chakra-ui/icons";

function RandomMealItem() {
  const [randomRecipe, setRandomRecipe] = useState();
  const [randomCuisine, setRandomCuisine] = useState();
  const { setOpenRecipe } = useContext(OpenRecipesContext);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { cuisines, setCuisines } = useContext(CuisinesContext);

  useEffect(() => {
    if (!cuisines) {
      return;
    }

    const randomCuisine = cuisines[Math.floor(Math.random() * cuisines.length)];

    getRecipes(true, randomCuisine).then((data) =>
      setRandomRecipe(data[Math.floor(Math.random() * data.length)])
    );
  }, [cuisines]);

  const onShowRecipeHandler = () => {
    return setOpenRecipe(randomRecipe);
  };

  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        // bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
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
            src={randomRecipe?.image}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {randomRecipe?.cuisine}
          </Text>
          <Heading
            onClick={onShowRecipeHandler}
            fontSize={"2xl"}
            // fontFamily={"body"}
            fontWeight={500}
            fontFamily="QuickSand"
            style={{
              textAlign: "center",
            }}
          >
            {randomRecipe?.name}
          </Heading>
          {randomRecipe?.time > 0 && (
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"lowercase"}
            >
              <TimeIcon margin="6px" />
              {randomRecipe?.time} minutes
            </Text>
          )}

          <Stack direction={"row"} align={"center"}></Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default RandomMealItem;
