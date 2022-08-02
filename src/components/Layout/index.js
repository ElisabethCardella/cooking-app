import Header from "./Header/Header";
import Footer from "./Footer";
import { Container } from "@chakra-ui/react";

function Layout(props) {
  return (
    <>
      <Header />
      <div style={{ maxHeight: "calc(100vh - 100px)", overflow: "auto" }}>
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
