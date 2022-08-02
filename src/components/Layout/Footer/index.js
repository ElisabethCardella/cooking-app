import { Box, Text, Center } from "@chakra-ui/react";
import { Flex, Spacer, Button } from "@chakra-ui/react";
import { BiHome, BiSearchAlt, BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="#A63760" height="60px" w="100%" p="0" color="white">
      <Flex>
        <Link to="/Home">
          {" "}
          <Button bg="transparent">
            <Box>
              <Center>
                <BiHome m="auto" fontSize="25" color="white" />
              </Center>
              <Text color="white">Home</Text>
            </Box>
          </Button>
        </Link>

        <Spacer />
        <Link to="/SelectCuisinePage">
          <Button bg="transparent">
            <Box>
              <Center>
                <BiSearchAlt fontSize="25" color="white" />
              </Center>
              <Text color="white">Cuisine</Text>
            </Box>
          </Button>
        </Link>
        <Spacer />
        <Link to="/FavouritePage">
          <Button bg="none">
            <Box>
              <Center>
                <BiHeart fontSize="25" color="white" />
              </Center>
              <Text color="white">Favourites</Text>
            </Box>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
