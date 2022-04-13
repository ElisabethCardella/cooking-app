import Layout from "../../components/Layout";
import { Center, Container } from "@chakra-ui/react";
import BannerHome from "../../components/BannerHome";

function Home() {
  return (
    <Layout>
      <Container width="100%">
        <Center fontSize={"3xl"}>The recipe of the day :) </Center>
        <BannerHome />
      </Container>
      <Container>
        <Center fontSize={"3xl"}>Your Calendar :)</Center>
        <BannerHome />
      </Container>
      <Container>
        <Center fontSize={"3xl"}>Recipe by country :)</Center>
        <BannerHome />
      </Container>
    </Layout>
  );
}

export default Home;
