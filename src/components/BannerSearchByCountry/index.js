import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { BiWorld } from "react-icons/bi";

const BannerSearchByCountry = () => {
  return (
    <Flex>
      <Box p="4">
        <BiWorld fontSize="45" color="black" />
      </Box>
      <Spacer />
      <Heading as="h2" p="4">
        Search by Country
      </Heading>
    </Flex>
  );
};

export default BannerSearchByCountry;
