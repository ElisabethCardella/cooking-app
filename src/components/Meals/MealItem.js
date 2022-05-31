import { StarIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import Card from "../UI/Card/Card";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  return (
    <Card className={classes.meal}>
      <img className={classes.img} src={props.image} alt={props.name} />
      <div className={classes.titledescription}>
        <h3 className={classes.title}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
      </div>
      <div>
        <Button>Show recipe</Button>
        <Box>
          <StarIcon color="red.500" />
          {props.numberOfReviews} reviews
        </Box>
      </div>
    </Card>
  );
};

export default MealItem;
