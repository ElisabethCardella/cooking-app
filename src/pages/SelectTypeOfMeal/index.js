import Layout from "../../components/Layout";
import BannerBeverage from "../../components/BannerBeverage";
import BannerAppetizer from "../../components/BannerAppetizer";
import BannerMainCourse from "../../components/BannerMainCourse";
import BannerStarter from "../../components/BannerStarter";
import BannerDessert from "../../components/BannerDessert";
import { Center } from "@chakra-ui/react";

function SelectTypeOfMeal() {
  return (
    <Layout>
      <Center fontSize={"3xl"}>Choose your Meal :)</Center>

      <BannerAppetizer></BannerAppetizer>
      <BannerStarter />
      <BannerMainCourse />
      <BannerDessert />
      <BannerBeverage />
    </Layout>
  );
}

export default SelectTypeOfMeal;
