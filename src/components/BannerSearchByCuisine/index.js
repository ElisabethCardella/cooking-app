import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { BiWorld } from "react-icons/bi";

const BannerSearchByCuisine = () => {
  return (
    <Flex>
      <Box p="4">
        <BiWorld fontSize="45" color="black" />
      </Box>
      <Spacer />
      <Heading as="h2" p="4">
        Search by Cuisine
      </Heading>
    </Flex>
  );
};

export default BannerSearchByCuisine;
