import Layout from "../../components/Layout";
import { Button, Center, Container, propNames } from "@chakra-ui/react";
import Card from "../../components/UI/Card/Card";
import { useNavigate } from "react-router-dom";
import worldMealImage from "../../assets/img/worldMealImage.jpeg";
import classes from "./Home.module.css";
import WelcomeUser from "../../components/WelcomeUser/WelcomeUser";

function Home() {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate("/SelectCountry");
  };

  return (
    <Layout>
      <WelcomeUser/>
      <div className={classes["main-image"]}>
        <img src={worldMealImage} alt="countriesmeal" />
      </div>
      <Card className={classes["summary-recipe-day"]}>
        <h2>Discover the recipe of the day</h2>
        <p>Discover the meal of today to travel around all around the world.</p>
        <Container className={classes.container}>
          <img
            className={classes.img}
            src="https://vin-champagne.ouest-france.fr/wp-content/uploads/2020/12/cuisine-indienne.jpg"
          />
          <Button> Name of the meal </Button>
        </Container>
      </Card>

      <Card className={classes.options}>
        <Container ><Button className={classes.option1}> Search by country </Button></Container>
        <Container ><Button className={classes.option1}> My favourites </Button></Container>
      </Card>
    </Layout>
  );
}

export default Home;
