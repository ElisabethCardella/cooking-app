import { backendUrl } from "../helpers/backendUrl";

export const getRecipes = (showExternalRecipes, cuisine, enteredText, user) => {
  console.log(user);
  let url = backendUrl + "/recipes";

  if (showExternalRecipes) {
    url += "?type=external";
  } else {
    url += "?type=internal&userId=" + user._id;
  }

  if (enteredText) {
    url += "&text=" + enteredText;
  }

  if (cuisine) {
    url += "&cuisine=" + cuisine;
  }

  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log("Error:", err));
};

export const getFavouriteRecipes = (user) => {
  let url = backendUrl + "/recipes?favouritedBy=" + user._id; //favouriteBy is not optional like the other one in getRecipes()

  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log("Error:", err));
};

// if onlyFavourited is true, then send ?favouritedBy=userId
