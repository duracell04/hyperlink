import React, { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase";
import Spinner from "react-bootstrap/Spinner";
import LogoAnimation from "../assets/animations/hyperlink logo.gif";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // Render the children only when the authentication state is loaded
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {loading ? (
        <div
          style={{ paddingTop: "450px" }}
          className="h-100 mh-100 w-100 d-flex align-items-center justify-content-center"
        >
          <img src={LogoAnimation} alt="" />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};