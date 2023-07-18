import React, { createContext, useEffect, useState } from "react";
import { auth } from "../configs/firebase";
import LogoAnimation from "../assets/animations/hyperlink-logo.gif";

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);


    // Simulate a loading delay of 3 seconds
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 4000);
  
      return () => clearTimeout(timer);
    }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
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
          style={{ paddingTop: "220px" }}
          className="h-100 mh-100 w-100 d-flex align-items-center justify-content-center"
        >
          <img src={LogoAnimation} width={450} alt="" />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};
