import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config'
import { GoogleAuthProvider } from 'firebase/auth';


export const AuthContext = createContext();
const auth = getAuth(app);
const gooleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create an account 

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // signup with gmail 

    const signUpWithGmail = () => {
        return signInWithPopup (auth, gooleProvider)
    }

    // login using email and password

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logOut 

    const logOut = () => {
       return signOut(auth)
    }

    // update profile 

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    // check sign in user 

    useEffect(() => {
     const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            } else {
                
            }
        })
 return () => {
    return unsubscribe();
 }


    }, [])



    const authIfo = {
        user,
        createUser,
        signUpWithGmail,
        login,
        logOut,
        updateUserProfile,
        loading
    }
    return (
        <AuthContext.Provider value={authIfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
