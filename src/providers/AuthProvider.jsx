import React, { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";
import { useState } from "react";

// Create a new context for the authentication state
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  // Initialize state variables
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // Functions for creating a new user account, signing in, and logging out
  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(
      auth,
      email,
      password,
      displayName,
      photoURL
    );
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  // Use an effect to update the user state when the authentication state changes
  useEffect(() => {
    // Create a listener for changes to the authentication state
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      console.log("loggedin user:", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    // Clean up the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  
  // Combine the state variables and functions into a single object
  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  // Render the AuthContext.Provider with the authInfo object as its value
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
