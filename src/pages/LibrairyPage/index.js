import Layout from "../../components/Layout";
import {
  Center,
  Container,
  Heading,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import AddMyRecipeButton from "../../components/AddMyRecipeButton/AddMyRecipeButton";
import classes from "./index.module.css";
import FavouriteRecipesComponent from "../../components/Favourite/FavouriteRecipes";
import MyOwnRecipesComponent from "../../components/MyOwnRecipes/MyOwnRecipes";

const LibrairyPage = () => {
  return (
    <Layout>
      <Container w="100%" maxWidth="100%" className={classes.container}>
        <Center>
          <Stack classeName={classes.stack}>
            <Heading
              fontFamily="QuickSand"
              classeName={classes.heading}
              id="test"
            >
              My librairy of Recipes
            </Heading>
            <Container
              className={classes.addButton}
              display={"flex"}
              justifyContent="center"
            >
              <AddMyRecipeButton padding={"15px"} />
            </Container>
          </Stack>
        </Center>
        <Tabs
          variant="soft-rounded"
          colorScheme="orange50"
          paddingBottom="20px"
          isLazy
        >
          <Center>
            <TabList padding={"15px"}>
              <Tab>My own recipes</Tab>
              <Tab>My favourites Recipes</Tab>
            </TabList>
          </Center>

          <TabPanels>
            <TabPanel>
              <MyOwnRecipesComponent />
            </TabPanel>
            <TabPanel>
              <FavouriteRecipesComponent />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default LibrairyPage;
