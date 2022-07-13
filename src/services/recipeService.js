export const getRecipes = (countryFilter) => {
  return [
    {
      id: "1",
      name: "pierogi",
      country: "Poland",
      description: "The description for the meal is comming soon",
      image:
        "https://larecettepolonaise.fr/wp-content/uploads/2020/11/Pierogi-a-la-choucroute.jpg",
      numberOfReviews: 32,
    },
    {
      id: "2",
      name: "gratin",
      country: "France",
      description: "The description for the meal is comming soon",
      image:
        "https://media.istockphoto.com/photos/potato-gratin-backed-potato-slices-with-creamy-sauce-top-view-picture-id953937312?k=20&m=953937312&s=612x612&w=0&h=EQ58q1LyiiAzrzreAHgPSvsVdokZnt-MJdEHrvcBIVY=",
      numberOfReviews: 23,
    },
    {
      id: "3",
      name: "cheese",
      country: "France",
      description: "The description for the meal is comming soon",
      image:
        "https://www.lalibre.be/resizer/YHnMGTL7ixORnGQM2ZpaCWbobdU=/0x0:2394x1593/768x512/filters:quality(70):format(jpg)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/PJPKLF7VZJDSXBMZYLTRCQLFDY.jpg",
      numberOfReviews: 14,
    },
  ].filter((recipe) => recipe.country === countryFilter || !countryFilter);

  //when there is a filter, e need to put the condition in the function
};
