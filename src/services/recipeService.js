export const getRecipes = (cuisineFilter) => {
  [
    {
      id: "1",
      name: "Pierogi",
      cuisine: "Poland",
      description: "The description for the meal is comming soon",
      image:
        "https://larecettepolonaise.fr/wp-content/uploads/2020/11/Pierogi-a-la-choucroute.jpg",
      rating: 4,
      time: "51minutes",
      difficulty: "Medium",
      numberOfPerson: "4",
      ingredients: [
        "600 g potato (not new, more bintje)",
        "250 g of cottage cheese such as cottage cheese",
        "1 medium onion",
        "1 tbsp butter",
        "pepper",
        "salt",
        "2 tbsp lard with bacon bits",
        "2 ml heavy cream",
        "For the dough:",
        "350g flour",
        "125ml lukewarm water",
        "salt",
        "1 egg",
      ],
      steps: [
        "prepare the stuffing: peel the potatoes and cook them in salted water.",
        "With a fork, mash the still hot potatoes and work them with a wooden spatula.",
        "Slice the onions and brown them in a case of butter. Crumble the cheese. Mix in a bowl cheese, onion, cooking fat, salt, pepper.",
        "Do not mix the ingredients, because in the stuffing there must be lumps of cottage cheese and potatoes.",
        "prepare the pastry: in a bowl, pour the flour in a fountain, add an egg, salt, sprinkle with warm water, knead to obtain a soft dough.",
        "Divide the dough into two parts. Roll out twice to obtain a thin pastry. Cut out circles 7-8 cm in diameter with a glass.",
        "Garnish each round with a heaped spoonful of stuffing, fold in half and seal the edges well. No stuffing between the edges otherwise they will peel off during cooking.",
        "Throw them in a large quantity of boiling salted water. They are cooked when they have risen to the surface + 2-3 min. Take them out with a slotted spoon. Serve with melted bacon and lardons or melted butter.",
        "Serve the fresh cream on the side.",
      ],
    },
    {
      id: "2",
      name: "Gratin",
      cuisine: "France",
      description: "The description for the meal is comming soon",
      image:
        "https://media.istockphoto.com/photos/potato-gratin-backed-potato-slices-with-creamy-sauce-top-view-picture-id953937312?k=20&m=953937312&s=612x612&w=0&h=EQ58q1LyiiAzrzreAHgPSvsVdokZnt-MJdEHrvcBIVY=",
      rating: 3,
      time: "1hour and 25minutes",
      difficulty: "Easy",
      numberOfPerson: "6",
      ingredients: [
        "1.5 kg of potato",
        "2 cloves garlic",
        "100g butter",
        "1 liter of milk",
        "nutmeg",
        "salt",
        "pepper",
        "30 cl of cream",
      ],
      steps: [
        "potato : Peel, wash and cut the potatoes into thin slices (NB: do not wash them AFTER having cut them, because the starch is necessary for a correct consistency).",
        "garlic : Chop the garlic very finely.",
        "Bring the milk, garlic, salt, pepper and nutmeg to the boil in a saucepan, then add the potatoes and cook for 10 to 15 minutes, depending on their firmness.",
        "Preheat the oven to 180°C (thermostat 6) and butter a gratin dish with a sheet of paper towel.",
        "Place the drained potatoes in the dish. Cover them with cream, then place small knobs of butter on top.",
        "Bake for 50 min to 1 hour.",
      ],
    },
    {
      id: "3",
      name: "Cheese",
      cuisine: "France",
      description: "The description for the meal is comming soon",
      image:
        "https://www.lalibre.be/resizer/YHnMGTL7ixORnGQM2ZpaCWbobdU=/0x0:2394x1593/768x512/filters:quality(70):format(jpg)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/PJPKLF7VZJDSXBMZYLTRCQLFDY.jpg",
      rating: 14,
      time: "30minutes",
      difficulty: "Very Easy",
      numberOfPerson: "4",
      ingredients: [
        "2 fresh purple figs",
        "1 small handful of pine nuts",
        "olive oil",
        "balsamic vinegar",
        "basil",
        "thyme",
        "3 pinches of allspice (or cinnamon-nutmeg mixture)",
        "1 sachet of vanilla sugar",
        "ground pepper",
        "salt",
        "1 log of goat cheese",
        "4 nice slices of country bread",
        " arugula",
        "chive",
      ],
      steps: [
        "On each slice of bread, place 2 thick slices of goat cheese and sprinkle with thyme and a little pepper.",
        "Bake the toasts for 10 min at 210°C (th 7), until the cheese is browned on top, but melts in the centre.",
        "Cut the figs into quarters and brown them for 5 minutes in the pan, with a knob of butter and the vanilla sugar, sprinkling them with 4 spices or cinnamon-nutmeg.",
        "Arrange the quartered figs, in the shape of a flower on each plate, next to the warm goat cheese toast and the rocket leaves seasoned with a drizzle of olive oil and balsamic vinegar.",
        "Decorate with fresh herbs (chives and basil) and a few pine nuts.",
        "Taste, while licking your chops.",
      ],
    },
  ].filter((recipe) => recipe.cuisine === cuisineFilter || !cuisineFilter);
};
