
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // console.log(user)

    const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
    const signOutUser = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
        setUser(currentUser)
        // console.log(currentUser)
        setLoading(false)
    })
    return () => {
        unsubscribe();
    }
  },[])

    const authData = {
        user,
        setUser,
        createUser,
        signOutUser,
        signIn,
        signInWithGoogle,
        loading
    }

    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;