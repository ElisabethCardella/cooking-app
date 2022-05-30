import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import classes from "./Login.module.css";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setenteredPassword] = useState();
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();

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
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    console.log("hello");
    event.preventDefault();
    props.onLoging(enteredEmail, enteredPassword);
  };

  return (
    <FormControl w="80%" h="50%" onSubmit={submitHandler}>
      <h1>Connexion</h1>
      <div
        className={`${classes.control} ${
          emailIsValid === false ? classes.invalid : ""
        }`}
      >
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          id="email"
          type="email"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
      </div>
      <div
        className={`${classes.control} ${
          passwordIsValid === false ? classes.invalid : ""
        }`}
      >
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
      </div>
      <div>
        <Button
          onClick={submitHandler}
          isDisabled={!passwordIsValid || !emailIsValid}
        >
          Login
        </Button>
      </div>
    </FormControl>
  );
};

export default Login;
