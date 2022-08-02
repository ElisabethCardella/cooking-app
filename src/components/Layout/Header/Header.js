import { Link, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/Home");
  };
  const logoutHandler = () => {
    navigate("/ConnexionPage");
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <Text onClick={onClickHandler}>World Food</Text>
        <button onClick={logoutHandler}>
          <IoPersonCircleOutline fontSize="45" color="black" />
        </button>
      </header>
    </Fragment>
  );
};

export default Header;
