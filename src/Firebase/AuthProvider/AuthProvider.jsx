import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase.init";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // Create New User
  const signUpNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // updateProfile

  const updateUserProfile = (name, photoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  // login Old User
  const loginOldUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google Login user

  const googleLoginUser = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // logOut User

  const logOutUser = () => {
    return signOut(auth);
  };

  // onAuthState Change ->
  useEffect(() => {
    const unSubscribe = () => {
      onAuthStateChanged(auth, (currenUser) => {
        setUser(currenUser);
        setLoading(false);
        console.log("currenUser is --->", currenUser);
      });
    };
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    signUpNewUser,
    loginOldUser,
    logOutUser,
    googleLoginUser,
    user,
    setUser,
    loading,
    setLoading,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}> {children} </AuthContext.Provider>
  );
}

export default AuthProvider;
