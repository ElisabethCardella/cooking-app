import Layout from "../Layout";
import Selector from "../Selector";
import BannerSearchByCuisine from "../BannerSearchByCuisine";
import AddMyRecipeButton from "../AddMyRecipeButton/AddMyRecipeButton";

function SelectCuisine() {
  return (
    <Layout>
      <BannerSearchByCuisine />
      <AddMyRecipeButton />
      <Selector />
    </Layout>
  );
}

export default SelectCuisine;
