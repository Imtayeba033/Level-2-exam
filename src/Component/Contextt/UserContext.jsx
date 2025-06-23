import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import auth from "../../Firebase/firebase.config";

export const AuthContext = createContext();
const UserContext = ({ children }) => {
  // create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = { createUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
