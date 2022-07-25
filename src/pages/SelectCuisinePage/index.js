import Layout from "../../components/Layout";
import Selector from "../../components/Selector";
import BannerSearchByCuisine from "../../components/BannerSearchByCuisine";

function SelectCuisine() {
  return (
    <Layout>
      <BannerSearchByCuisine />

      <Selector />
    </Layout>
  );
}

export default SelectCuisine;
