import { Box, Text, Center } from "@chakra-ui/react";
import { Flex, Spacer, Button } from "@chakra-ui/react";
import { BiHome, BiSearchAlt, BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box bg="#b14f0d" height="60px" w="100%" p="2.5" color="white">
      <Flex>
        <Link to="/Home">
          {" "}
          <Button bg="#b14f0d">
            <Box>
              <Center>
                <BiHome m="auto" fontSize="25" color="black" />
              </Center>
              <Text color="black">Home</Text>
            </Box>
          </Button>
        </Link>

        <Spacer />
        <Link to="/SelectCountryPage">
          <Button bg="#b14f0d">
            <Box>
              <Center>
                <BiSearchAlt fontSize="25" color="white" />
              </Center>
              <Text color="black">Country</Text>
            </Box>
          </Button>
        </Link>
        <Spacer />
        <Link to="/FavouritePage">
          <Button bg="#b14f0d">
            <Box>
              <Center>
                <BiHeart fontSize="25" color="white" />
              </Center>
              <Text color="black">Favourites</Text>
            </Box>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
