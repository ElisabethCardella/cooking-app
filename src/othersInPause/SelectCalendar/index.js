import Layout from "../../components/Layout";
import { Center } from "@chakra-ui/react";
import ShowCalendar from "../../components/ShowCalendar";
import DateBox from "../../components/DateBox";

function SelectCalendar() {
  return (
    <Layout>
      <Center fontSize={"3xl"}>Have a look in your recipe planning :)</Center>
      <DateBox />
      <ShowCalendar />
    </Layout>
  );
}

export default SelectCalendar;
