import { VStack } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SelectCuisinePage from "./components/WelcomeUser";
import FavouritePage from "./pages/FavouritePage";
import ConnexionPage from "./pages/ConnexionPage";
import Home from "./pages/Home";
import FavoriteRecipeContextProvider from "./store/FavouritesContextProvider";
import OpenRecipesContextProvider from "./store/OpenRecipesContextProvider";
import RecipeModal from "./components/Meals/RecipeModal";
import RecipesContextProvider from "./store/RecipesContextProvider";
import CuisinesContextProvider from "./store/CuisinesContextProvider";

function App() {
  return (
    <FavoriteRecipeContextProvider>
      <OpenRecipesContextProvider>
        <RecipesContextProvider>
          <CuisinesContextProvider>
            <VStack justify="space-between" height="100vh">
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route
                  path="/SelectCuisinePage"
                  element={<SelectCuisinePage />}
                />
                <Route path="/ConnexionPage" element={<ConnexionPage />} />
                <Route path="/FavouritePage" element={<FavouritePage />} />
              </Routes>
            </VStack>
            <>
              <RecipeModal />
            </>
          </CuisinesContextProvider>
        </RecipesContextProvider>
      </OpenRecipesContextProvider>
    </FavoriteRecipeContextProvider>
  );
}

export default App;
