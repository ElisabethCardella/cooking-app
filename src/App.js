import { VStack } from "@chakra-ui/react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SelectCountry from "./pages/SelectCountry";
import SelectTypeOfMeal from "./pages/SelectTypeOfMeal";
import SelectTheRecipe from "./pages/SelectTheRecipe";

import ConnexionPage from "./pages/ConnexionPage";
import Home from "./pages/Home";

function App() {
  return (
    <VStack justify="space-between" height="100vh">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/SelectCountry" element={<SelectCountry />} />
        <Route path="/SelectTypeOfMeal" element={<SelectTypeOfMeal />} />
        <Route path="/SelectTheRecipe" element={<SelectTheRecipe />} />
        <Route path="/ConnexionPage" element={<ConnexionPage />} />
      </Routes>
    </VStack>
  );
}

export default App;
