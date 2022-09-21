import { VStack } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SelectCuisinePage from "./pages/SelectCuisinePage";
import LibrairyPage from "./pages/LibrairyPage";
import ConnexionPage from "./pages/ConnexionPage";
import Home from "./pages/Home";
import FavoriteRecipeContextProvider from "./store/FavouritesContextProvider";
import OpenRecipesContextProvider from "./store/OpenRecipesContextProvider";
import RecipeModal from "./components/Meals/RecipeModal";
import RecipesContextProvider from "./store/RecipesContextProvider";
import CuisinesContextProvider from "./store/CuisinesContextProvider";
import SignUp from "./components/Authentification/SignUp/SignUp";
import UserContextProvider from "./store/UserContextProvider";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <FavoriteRecipeContextProvider>
      <OpenRecipesContextProvider>
        <RecipesContextProvider>
          <CuisinesContextProvider>
            <UserContextProvider>
              <VStack
                justify="space-between"
                height="100vh"
                backgroundColor={"#f7fafc"}
              >
                <Routes>
                  <Route path="/Home" element={<Home />} />
                  <Route
                    path="/SelectCuisinePage"
                    element={<SelectCuisinePage />}
                  />
                  <Route path="/ConnexionPage" element={<ConnexionPage />} />
                  <Route path="/LibrairyPage" element={<LibrairyPage />} />
                  <Route path="/Signup" element={<SignUp />} />
                  <Route path="/ContactPage" element={<ContactPage />} />
                </Routes>
              </VStack>
              <>
                <RecipeModal />
              </>
            </UserContextProvider>
          </CuisinesContextProvider>
        </RecipesContextProvider>
      </OpenRecipesContextProvider>
    </FavoriteRecipeContextProvider>
  );
}

export default App;
