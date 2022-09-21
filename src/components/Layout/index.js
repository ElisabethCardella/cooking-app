import Header from "./Header/Header";
import Footer from "./Footer";
import classes from "./Layout.module.scss";
import { Container } from "@chakra-ui/react";

function Layout(props) {
  return (
    <>
      <Header />
      <div
        className={classes.backgroundColor}
        style={{
          width: "100%",
          maxHeight: "calc(100vh - 100px)",
          overflow: "auto",
        }}
      >
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
