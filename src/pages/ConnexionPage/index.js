import Layout from "../../components/Layout";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import Login from "../../components/Authentification/Login/Login";

const ConnexionPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storeUserLoggedInInformation = localStorage.setItem(
      "isLoggedIn",
      "1"
    );

    if (storeUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logingHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <Layout>
      {!isLoggedIn && <Login onLoging={logingHandler} />}
      {isLoggedIn && <Navigate to="/Home" />}
    </Layout>
  );
};

export default ConnexionPage;
