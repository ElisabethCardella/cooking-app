import { Container, Heading, Text } from "@chakra-ui/react";
import { useContext } from "react";
import UserContext from "../../store/UserContext";

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
      <Heading>{generateWelcomeMessage()}</Heading>
      <Text>{user?.firstName}</Text>
    </Container>
  );
};

export default WelcomeUser;
