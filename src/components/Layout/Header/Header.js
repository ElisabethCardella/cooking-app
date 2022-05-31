import { Box } from "@chakra-ui/react";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import { Fragment } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/ConnexionPage");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Fragment>
    <header className={classes.header}>
      <h1>World Food</h1>
      <button onClick={logoutHandler}>
        <IoPersonCircleOutline fontSize="45" color="black" />
      </button>
    </header>
   </Fragment>
  );
};

export default Header;
