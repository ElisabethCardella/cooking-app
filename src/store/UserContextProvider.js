import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = (props) => {
  const [user, setUserState] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  const setUser = (user) => {
    localStorage.setItem("user", JSON.stringify(user));

    setUserState(user);
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
