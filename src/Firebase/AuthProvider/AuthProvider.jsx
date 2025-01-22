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
import useAxiosPublic from "../../Hook/useAxiosPublic";
import auth from "../firebase.init";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

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

  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      if (currenUser) {
        const userInfo = {
          email: currenUser.email,
        };
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            console.log("live", res.data.token);
            setLoading(false);
            setUser(currenUser);
          }
        });
      } else {
        localStorage.removeItem("access-token");
        setLoading(false);
      }

      console.log("currenUser is --->", currenUser);
    });

    return () => {
      unSubscribe();
    };
  }, []);
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);
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
