import { Box, HStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const BannerStarter = () => {
  const property = {
    imageUrl:
      "https://www.olivemagazine.com/recipes/collection/best-ever-starter-recipes/",

    country: "Italy",
    title: "Starter",
    reviewCount: 34,
    rating: 4,
  };
  // Sample card from Airbnb

  return (
    <HStack spacing="24px" width="90%" borderWidth="1px" borderRadius="lg">
      <Box w="80px" h="100px" bg="yellow.200">
        Image
      </Box>
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        {property.title}
        <br></br>
        {property.country}
        <Box>
          <StarIcon color="red.500" />
          {property.reviewCount} reviews
        </Box>
      </Box>
    </HStack>
  );
};

export default BannerStarter;
