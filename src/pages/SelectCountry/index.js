import Layout from "../../components/Layout";
import Selector from "../../components/Selector";
import BannerSearchByCountry from "../../components/BannerSearchByCountry";
import BannerAppetizer from "../../components/BannerAppetizer";

function SelectCountry() {
  return (
    <Layout>
      <BannerSearchByCountry />
      <Selector />
    </Layout>
  );
}

export default SelectCountry;
