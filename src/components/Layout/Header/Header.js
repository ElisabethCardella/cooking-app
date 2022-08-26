import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { Fragment } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.scss";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { useState } from "react";

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
        <Text className={classes.fullname} onClick={onClickHandler}>
          World Food
        </Text>
        <Text className={classes.shortname} onClick={onClickHandler}>
          WF
        </Text>

        <Menu>
          <div>
            <MenuButton>
              <div className={classes.showMobile}>
                <Button colorScheme="pink">
                  <HamburgerIcon size="40px" />
                </Button>
              </div>
              <div className={classes.showDesktop}>
                <Button as={Button} colorScheme="pink">
                  Profil
                </Button>
              </div>
            </MenuButton>
          </div>

          <MenuList color="black">
            <MenuGroup title="Profile">
              <MenuItem onClick={logoutHandler}>Sign in</MenuItem>
              <MenuItem>My Account </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Contact</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        {/* <button >
          <IoPersonCircleOutline fontSize="45" color="black" />
        </button> */}
      </header>
    </Fragment>
  );
};

export default Header;
