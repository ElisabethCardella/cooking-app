import Layout from "../../components/Layout";

import { Center } from "@chakra-ui/react";
import BannerAppetizer from "../../components/BannerAppetizer";

function SelectTheRecipe() {
  return (
    <Layout>
      <Center fontSize={"3xl"}>Choose your type of Apetizer :)</Center>
      <BannerAppetizer />
      <BannerAppetizer />
      <BannerAppetizer />
      <BannerAppetizer />
    </Layout>
  );
}

export default SelectTheRecipe;
