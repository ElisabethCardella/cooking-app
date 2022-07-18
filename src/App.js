import { VStack } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SelectCountryPage from "./pages/SelectCountryPage";
import FavouritePage from "./pages/FavouritePage";
import ConnexionPage from "./pages/ConnexionPage";
import Home from "./pages/Home";
import FavoriteRecipeContextProvider from "./store/FavouritesContextProvider";
import OpenRecipesContextProvider from "./store/OpenRecipesContextProvider";
import RecipeModal from "./components/Meals/RecipeModal";

function App() {
  return (
    <FavoriteRecipeContextProvider>
      <OpenRecipesContextProvider>
        <VStack justify="space-between" height="100vh">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/SelectCountryPage" element={<SelectCountryPage />} />
            <Route path="/ConnexionPage" element={<ConnexionPage />} />
            <Route path="/FavouritePage" element={<FavouritePage />} />
          </Routes>
        </VStack>
        <>
          <RecipeModal />
        </>
      </OpenRecipesContextProvider>
    </FavoriteRecipeContextProvider>
  );
}

export default App;
