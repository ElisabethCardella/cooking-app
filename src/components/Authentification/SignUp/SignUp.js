import { ViewIcon } from "@chakra-ui/icons";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../../helpers/backendUrl";
import Layout from "../../Layout";
import classes from "./SignUp.module.scss";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setenteredPassword] = useState();
  const [enteredFirstName, setEnteredFirstName] = useState();
  const [enteredLastName, setEnteredLastName] = useState();
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [firstNameIsValid, setFirstNameIsValid] = useState();
  const [lastNameIsValid, setLastNameIsValid] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setenteredPassword(event.target.value);
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };
  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword?.trim().length > 6);
  };

  const validateFirstNameHandler = () => {
    setFirstNameIsValid(enteredFirstName.trim().length > 0);
  };

  const validateLastNameHandler = () => {
    setLastNameIsValid(enteredLastName.trim().length > 0);
  };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const submitFormHandler = (event) => {
    console.log("ca marche");

    event.preventDefault();

    fetch(backendUrl + "/api/auth/signup", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        firstName: enteredFirstName,
        lastName: enteredLastName,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log("Error:", err));
    navigate("/ConnexionPage");
  };

  const clickLoginPageHandler = () => {
    navigate("/ConnexionPage");
  };

  return (
    <Layout className={classes.backgroundColor}>
      <Flex
        minH={"60vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign up for your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to discover all your future recipes !{" "}
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel marginBottom="1px">Email address</FormLabel>
                <Input
                  value={enteredEmail ?? ""}
                  onChange={emailChangeHandler}
                  onBlur={validateEmailHandler}
                />
              </FormControl>
              <FormControl id="firstName">
                <FormLabel marginBottom="1px">First Name</FormLabel>
                <Input
                  value={enteredFirstName ?? ""}
                  onChange={firstNameChangeHandler}
                  onBlur={validateFirstNameHandler}
                />
              </FormControl>
              <FormControl id="lastName">
                <FormLabel marginBottom="1px">Last Name</FormLabel>
                <Input
                  value={enteredLastName ?? ""}
                  onChange={lastNameChangeHandler}
                  onBlur={validateLastNameHandler}
                />
              </FormControl>
              <FormControl id="password">
                <Container display="flex" alignItems="flex-start">
                  <FormLabel justifyContent="center">Password</FormLabel>
                  <ViewIcon
                    margin="5px"
                    boxSize="25px"
                    onClick={togglePasswordVisiblity}
                  />
                </Container>
                <Input
                  type={passwordShown ? "text" : "password"}
                  value={enteredPassword ?? ""}
                  onChange={passwordChangeHandler}
                  onBlur={validatePasswordHandler}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link
                    onClick={clickLoginPageHandler}
                    fontSize="12px"
                    color="#A63760"
                  >
                    You already have an account ? Log in
                  </Link>
                </Stack>
                <Button
                  className={classes.ButtonbackgroundButton}
                  color={"black"}
                  _hover={{
                    bg: "#450920",
                  }}
                  onClick={submitFormHandler}
                  isDisabled={
                    !passwordIsValid ||
                    !emailIsValid ||
                    !firstNameIsValid ||
                    !lastNameIsValid
                  }
                >
                  Create your account
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Login;
