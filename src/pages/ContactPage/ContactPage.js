import {
  Container,
  Flex,
  Box,
  Heading,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  toast,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import Layout from "../../components/Layout";
import axios from "axios";
import { backendUrl } from "../../helpers/backendUrl";

const ContactPage = () => {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const NamesChangeHandler = (event) => {
    console.log(event.target.value);
    setNames(event.target.value);
  };

  const MailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const MessageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const {} = await axios.post(backendUrl + "/api/email`", {
        names,
        email,
        message,
      });
      setLoading(false);
      alert("yes");
      // toast({
      //   title: "Message envoyé.",
      //   description: "Nous vous répondrons une réponse au plus vite.",
      //   status: "success",
      //   duration: 9000,
      //   isClosable: true,
      //   bg: "blue.500",
      // });
    } catch (err) {
      setLoading(false);
      // toast.error(
      //   err.response && err.response.data.message
      //     ? err.response.data.message
      //     : err.message
      // );
    }
  };

  return (
    <Layout>
      <Container
        maxW="full"
        minHeight={"calc(100vh - 100px)"}
        centerContent
        overflow="hidden"
      >
        <Flex>
          <Box
            background="grey"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 10, sm: 3, md: 5, lg: 20 }}>
                <Heading>Une question ?</Heading>

                <WrapItem m={3}>
                  <Box bg="white" borderRadius="lg" w="100%">
                    <Box m={4} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Prénom et Nom</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input
                              type="text"
                              size="md"
                              value={names}
                              onChange={NamesChangeHandler}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Ton adresse mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none" />
                            <Input
                              type="text"
                              size="md"
                              value={email}
                              onChange={MailChangeHandler}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            value={message}
                            onChange={MessageChangeHandler}
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            onClick={submitFormHandler}
                            isDisabled={!names || !email || !message}
                            type="submit"
                            variant="solid"
                            bg="#a63760"
                            color="white"
                            _hover={{}}
                          >
                            Envoyer message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Layout>
  );
};

export default ContactPage;
