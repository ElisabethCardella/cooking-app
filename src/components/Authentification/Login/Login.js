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
import { useContext } from "react";
import UserContext from "../../../store/UserContext";
import classes from "./Login.module.scss";
import { backendUrl } from "../../../helpers/backendUrl";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setenteredPassword] = useState();
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useContext(UserContext);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setenteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword?.trim().length > 6);
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const submitFormHandler = (event) => {
    console.log("login done");

    event.preventDefault();

    const catchError = (response) => {
      console.log(response.message);
      setErrorMessage(response.message);
    };

    fetch(backendUrl + "/api/auth/login", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
      }),
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(async (response) => {
        console.log(response);
        if (!response.ok) {
          catchError(await response.json());
          console.log("mince");

          return;
        }
        console.log(user.firstName);
        setUser((await response.json()).user);
        navigate("/Home");
      })
      .catch(async (response) => {
        catchError(await response.json());
      });
  };

  const clickToSignUpHandler = () => {
    navigate("/SignUp");
  };

  return (
    <Flex
      minH={"60vh"}
      maxWidth={"100%"}
      align={"center"}
      justify={"center"}
      className={classes.backgroundColor}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={5} px={6}>
        <Stack align={"center"}>
          <Heading fontFamily="QuickSand" className={classes.heading}>
            Log in to your account
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to discover all your future recipes !{" "}
          </Text>
        </Stack>
        {errorMessage && (
          <Text color="red" fontSize="15px">
            {errorMessage}
          </Text>
        )}
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
                type={"text"}
                value={enteredEmail ?? ""}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
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
                placeholder="hello"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link
                  onClick={clickToSignUpHandler}
                  fontSize="12px"
                  color="#A63760"
                >
                  You don't have yet an account ? Sign up
                </Link>
              </Stack>
              <Button
                bg="#F9DBBD"
                color={"black"}
                _hover={{
                  bg: "#450920",
                }}
                onClick={submitFormHandler}
                isDisabled={!passwordIsValid || !emailIsValid}
              >
                Log in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
