import { Heading } from "@chakra-ui/react";

const WelcomeUser = () => {
  const DateToday = new Date();
  const myHour = DateToday.getHours();
  console.log(myHour);
  const generateWelcomeMessage = () => {
    if (myHour < 12) {
      return "Good morning";
    } else if (myHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return <Heading>{generateWelcomeMessage()} 'props.UserName'</Heading>;
};

export default WelcomeUser;
