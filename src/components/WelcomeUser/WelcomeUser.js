import { Container, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "../../store/UserContext";
import classes from "./WelcomeUser.module.scss";

const WelcomeUser = () => {
  const DateToday = new Date();
  const myHour = DateToday.getHours();
  const { user, setUser } = useContext(UserContext);

  const generateWelcomeMessage = () => {
    if (myHour < 12) {
      return "Good morning";
    } else if (myHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  console.log("voici la console de user", user);

  return (
    <Container>
      <Heading className={classes.headingTitle} fontFamily="QuickSand">
        {generateWelcomeMessage()}
      </Heading>
      <Text
        className={classes.headingTitle}
        fontFamily="QuickSand"
        fontSize="24px"
      >
        {user?.firstName}
      </Text>
    </Container>
  );
};

export default WelcomeUser;
