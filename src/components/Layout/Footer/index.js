import { Box, Text, Center } from "@chakra-ui/react";
import { Flex, Spacer, Button } from "@chakra-ui/react";
import { BiHome, BiSearchAlt, BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <Box
      className={classes.colorBacgroundFooter}
      height="60px"
      w="100%"
      alignItems="baseline"
      color="white"
    >
      <Flex marginTop="10px">
        <Link to="/Home">
          {" "}
          <Button bg="transparent">
            <Box>
              <Center>
                <BiHome
                  className={`${classes.fontSizeIcon} ${classes.color}`}
                />
              </Center>
              <Text marginTop="3px" className={classes.color}>
                Home
              </Text>
            </Box>
          </Button>
        </Link>

        <Spacer />
        <Link to="/SelectCuisinePage">
          <Button bg="transparent">
            <Box>
              <Center>
                <BiSearchAlt
                  className={`${classes.fontSizeIcon} ${classes.color}`}
                />
              </Center>
              <Text marginTop="3px" className={classes.color}>
                Cuisine
              </Text>
            </Box>
          </Button>
        </Link>
        <Spacer />
        <Link to="/FavouritePage">
          <Button bg="none">
            <Box>
              <Center>
                <BiHeart
                  className={`${classes.fontSizeIcon} ${classes.color}`}
                />
              </Center>
              <Text
                marginTop="3px"
                className={`${classes.fontSizeText} ${classes.color}`}
              >
                Favourites
              </Text>
            </Box>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
