import { Flex } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Container, Spacer, Text } from "@chakra-ui/react";
import { format, isToday, isTomorrow, isYesterday } from "date-fns";

const DateBox = () => {
  const formatDate = (date) => {
    if (isToday(date)) {
      return "Today";
    }
    if (isYesterday(date)) {
      return "Yesterday";
    }
    if (isTomorrow(date)) {
      return "Tomorrow";
    }

    return format(date, "MMMM do");
  };

  return (
    <Container p="8">
      <Container
        borderColor="#97266D"
        border="1px"
        borderRadius="3xl"
        p="3"
        w="80%"
        maxW={{ base: "100%", md: "100%", xl: "100%" }}
      >
        <Flex>
          <Box>
            <button>
              <ChevronLeftIcon fontSize="30px" />
            </button>
          </Box>
          <Spacer />
          <Box>
            <Text fontSize="20px">Today</Text>
          </Box>
          <Spacer />
          <Box>
            <button onClick>
              <ChevronRightIcon fontSize="30px" />
            </button>
          </Box>
        </Flex>
      </Container>
    </Container>
  );
};

export default DateBox;
