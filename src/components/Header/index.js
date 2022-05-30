import { Box } from "@chakra-ui/react";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import { IoPersonCircleOutline } from "react-icons/io5";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/ConnexionPage");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Box bg="#D3793F" height="60px" w="100%" p={2} color="white">
      <Flex>
        <Box p="2">
          <Heading size="md">Travel for food</Heading>
        </Box>
        <Spacer />
        <button onClick={logoutHandler}>
          <IoPersonCircleOutline fontSize="45" color="black" />
        </button>
      </Flex>
    </Box>
  );
};

export default Header;
