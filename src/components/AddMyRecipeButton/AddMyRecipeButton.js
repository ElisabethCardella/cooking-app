import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Divider } from "@chakra-ui/react";
import { useState } from "react";
import { useContext } from "react";
import RecipesContext from "../../store/RecipesContext";
import CuisinesContext from "../../store/CuisinesContext";

const AddMyRecipeButton = () => {
  const [enteredNameMeal, setenteredNameMeal] = useState(null);
  const [selectedNewCuisine, setSelectedNewCuisine] = useState(null);
  const [enteredDescriptionMeal, seteEnteredDescriptionMeal] = useState(null);
  // const [enteredPictureMeal, seteEnteredPictureMeal] = useState(null);
  const [enteredRatingMeal, seteEnteredRatingMeal] = useState(null);
  const [enteredTimeNeededMeal, setenteredTimeNeededMeal] = useState(null);
  const [enteredDifficultLevelMeal, setEnteredDifficultyLevelMeal] =
    useState(null);
  const [enteredNumberPersonMeal, setEnteredNumberPersonMeal] = useState(null);
  const [enteredIngredientsMeal, setEnteredIngredientsMeal] = useState(null);
  const [enteredStepsMeal, setEnteredStepsMeal] = useState(null);
  const { recipes, setRecipes } = useContext(RecipesContext);
  const { cuisines } = useContext(CuisinesContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHandler = () => {
    onOpen();
  };

  const NameMealChangeHandler = (event) => {
    setenteredNameMeal(event.target.value);
  };

  const onChangeSelectedCuisineHandler = (event) => {
    setSelectedNewCuisine(event.target.value);
  };

  const DescriptionMealChangeHandler = (event) => {
    seteEnteredDescriptionMeal(event.target.value);
  };

  const ratingMealChangeHandler = (event) => {
    seteEnteredRatingMeal(event.target.value);
  };

  const timeNeededChangeHandler = (event) => {
    setenteredTimeNeededMeal(event.target.value);
  };

  const difficultyLevelChangeHandler = (event) => {
    setEnteredDifficultyLevelMeal(event.target.value);
  };

  const numberPersonChangeHandler = (event) => {
    setEnteredNumberPersonMeal(event.target.value);
  };

  const onChangeIngredientHandler = (event) => {
    setEnteredIngredientsMeal(event.target.value);
  };

  const onChangeStepsHandler = (event) => {
    setEnteredStepsMeal(event.target.value);
  };

  const submitHandler = () => {
    let updatedRecipes = [...recipes];

    updatedRecipes.push({
      id: "10",
      name: enteredNameMeal,
      cuisine: selectedNewCuisine,
      description: "The description for the meal is comming soon",
      image:
        "https://larecettepolonaise.fr/wp-content/uploads/2020/11/Pierogi-a-la-choucroute.jpg",
      rating: enteredRatingMeal,
      time: enteredTimeNeededMeal,
      difficulty: enteredDifficultLevelMeal,
      numberOfPerson: enteredNumberPersonMeal,
      ingredients: [enteredIngredientsMeal],
      steps: [enteredStepsMeal],
    });

    setRecipes(updatedRecipes);
    console.log(updatedRecipes);

    onClose();
  };

  return (
    <div>
      <Button colorScheme="teal" onClick={onClickHandler}>
        <AddIcon margin="6px" /> Add my recipe{" "}
      </Button>

      <Modal isOpen={isOpen} placement="right" onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="960px">
          <ModalHeader>Create your recipe</ModalHeader>
          <Divider margin="20px" />
          <ModalBody>
            <Input
              h="50px"
              type="text"
              id="name"
              value={enteredNameMeal}
              onChange={NameMealChangeHandler}
              placeholder="Enter the name of your meal ..."
            />
            <Select
              height="50px"
              value={selectedNewCuisine}
              onClick={onClickHandler}
              onChange={onChangeSelectedCuisineHandler}
              paddingTop="20px"
              placeholder="Select cuisine"
            >
              {cuisines
                .sort((cuisineA, cuisineB) => cuisineA.localeCompare(cuisineB))
                .map((cuisine, index) => (
                  <option value={cuisine} key={index}>
                    {cuisine[0].toUpperCase() + cuisine.substring(1)}
                  </option>
                ))}
            </Select>
            <Input
              height="50px"
              type="text"
              id="name"
              marginTop="20px"
              value={enteredDescriptionMeal}
              onChange={DescriptionMealChangeHandler}
              placeholder="Enter a short description ..."
            />
            <Box boxSize="sm" marginTop="20px">
              <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
            </Box>

            <FormControl
              height="50px"
              paddingTop="20px"
              value={enteredRatingMeal}
              onChange={ratingMealChangeHandler}
            >
              <NumberInput max={5} min={0} step="1">
                <NumberInputField
                  placeholder="Enter a
              rating ..."
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>

            <FormControl
              height="50px"
              paddingTop="20px"
              value={enteredTimeNeededMeal}
              onChange={timeNeededChangeHandler}
            >
              <NumberInput max={50} min={1} step="1">
                <NumberInputField placeholder="Time needed" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Divider margin="30px" />
            <Select
              height="50px"
              placeholder="Select the difficulty level"
              value={enteredDifficultLevelMeal}
              onChange={difficultyLevelChangeHandler}
              paddingTop="20px"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Difficult</option>
            </Select>
            <FormControl
              h="50px"
              marginTop="20px"
              value={enteredNumberPersonMeal}
              onChange={numberPersonChangeHandler}
            >
              <NumberInput max={20} min={1} marginTop="20px">
                <NumberInputField placeholder="Number of personn" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Input
              marginTop="20px"
              onChange={onChangeIngredientHandler}
              height="350px"
              placeholder="Type your ingredients here... PUT CHECK LIST"
              value={enteredIngredientsMeal}
            >
              {/* <div>
                <Checkbox defaultChecked>
                  <Input type="text" />
                </Checkbox>
              </div> */}
            </Input>
            <Input
              marginTop="20px"
              onChange={onChangeStepsHandler}
              height="350px"
              placeholder="Type the steps here ... PUT CHECK LIST"
              value={enteredStepsMeal}
            />
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={submitHandler}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddMyRecipeButton;
