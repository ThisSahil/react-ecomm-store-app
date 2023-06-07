import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import { createContext } from "react";

// export const AuthContext = createContext();

const Authmain = () => {
  const [loggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedFlag = localStorage.getItem("flag");

    if (storedFlag !== null) {
      setIsLoggedIn(JSON.parse(storedFlag));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("flag", JSON.stringify(loggedIn));
  }, [loggedIn]);

  const handleLoginCheck = () => {
    setIsLoggedIn((loggedIn) => !loggedIn);
  };

  // console.log(loggedIn);

  //   return <div>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>;
  return (
    // <AuthContext.Provider value={{ loggedIn, setIsLoggedIn }}>
    <div>
      {loggedIn ? (
        <div onClick={handleLoginCheck}>
          <LogoutButton />
        </div>
      ) : (
        <div onClick={handleLoginCheck}>
          <LoginButton />
        </div>
      )}
    </div>
    // </AuthContext.Provider>
  );
};

export default Authmain;
