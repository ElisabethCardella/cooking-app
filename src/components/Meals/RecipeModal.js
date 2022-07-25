import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import OpenRecipesContext from "../../store/OpenRecipesContext";
import Card from "../UI/Card/Card";
import classes from "./RecipeModal.module.css";
import { TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { GiCookingGlove } from "react-icons/gi";

const RecipeModal = () => {
  const { openRecipe, setOpenRecipe } = useContext(OpenRecipesContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (openRecipe) {
      onOpen();
    }

    if (!openRecipe) {
      close();
      setOpenRecipe(null);
    }
  }, [openRecipe]);

  useEffect(() => {
    onClose();
  }, []);

  const close = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={close}>
      <ModalOverlay />
      <ModalContent maxW="960px">
        <ModalHeader>
          <div className={classes.title}>{openRecipe.name}</div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className={classes.body}>
          <img
            className={classes.img}
            src={openRecipe.image}
            alt={openRecipe.name}
          />
          <div className={classes.details}>
            <div className={classes.glove}>
              <GiCookingGlove />
              {openRecipe.difficulty}
            </div>
            <div>
              <TimeIcon margin="6px" />
              {openRecipe.time}
            </div>
            <div>
              <ViewIcon margin="6px" />
              {openRecipe.rating}stars
            </div>
          </div>
          <Card className={classes.ingredients}>
            <h2 className={classes.subtitle}>Ingredients</h2>
            <br></br>
            <ol className={classes.ol}>
              {openRecipe?.ingredients?.map((ingredient) => (
                <li>{ingredient}</li>
              ))}
            </ol>
          </Card>

          <Card>
            <h2 className={classes.subtitle}>Steps</h2>
            <br></br>
            <ol className={classes.ol}>
              {openRecipe?.steps?.map((step) => (
                <li> {step}</li>
              ))}
            </ol>
          </Card>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default RecipeModal;
