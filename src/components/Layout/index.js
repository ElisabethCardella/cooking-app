import Header from "./Header/Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
