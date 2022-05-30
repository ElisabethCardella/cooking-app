import Layout from "../../components/Layout";
import { Center, Container } from "@chakra-ui/react";

function Home() {
  return (
    <Layout>
      <Container width="100%">
        <Center fontSize={"3xl"}>The recipe of the day </Center>
      </Container>

      <Container>
        <Center fontSize={"3xl"}>Recipe by country </Center>
      </Container>
    </Layout>
  );
}

export default Home;
