import Layout from "../../components/Layout";
import WelcomeUser from "../../components/WelcomeUser/WelcomeUser";
import RandomMealItem from "../../components/RandomMealItem/RandomMealItem";

function Home() {
  return (
    <Layout>
      <WelcomeUser />
      <RandomMealItem />
    </Layout>
  );
}

export default Home;
