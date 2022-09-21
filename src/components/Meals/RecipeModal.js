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
  Text,
  Heading,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import OpenRecipesContext from "../../store/OpenRecipesContext";
import Card from "../UI/Card/Card";
import classes from "./RecipeModal.module.scss";
import { TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { GiCookingGlove } from "react-icons/gi";
import { Box } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

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

  console.log("openRecipe => ", openRecipe);

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
          {openRecipe.time > 0 && (
            <div className={classes.details}>
              <Text color={"gray"}>
                <TimeIcon margin="6px" />
                {openRecipe.time < 60
                  ? openRecipe.time + "mins"
                  : "≃ " + Math.round(openRecipe.time / 60) + "hour(s)"}
              </Text>
              {/* <div>
              <ViewIcon margin="6px" />
              {openRecipe.rating}stars
            </div> */}
              {/* <div className={classes.glove}>
              <GiCookingGlove />
              {openRecipe.difficulty}
            </div> */}
            </div>
          )}
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
            <Box textAlign="center" py={10} px={6}>
              <InfoIcon boxSize={"50px"} color={"blue.500"} />
              <Heading as="h2" size="xl" mt={6} mb={2} fontFamily={"QuickSand"}>
                A venir prochainement
              </Heading>
            </Box>
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
