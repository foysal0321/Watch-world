import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/Firebase'

export const Authcontext = createContext();
const auth = getAuth(app)
const googleAuth = new GoogleAuthProvider()

const Context = ({children}) => {
    const [user,setuser] = useState(null);
    const [loding,setloding] = useState(true);

    const crateUser =(email,pass)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const signUser = (email,pass)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }

    const logoutUser =()=>{
        setloding(true)
        return signOut(auth)
    }

    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser, profile)
    }

    const signinGoogle =()=>{
        setloding(true)
        return signInWithPopup(auth, googleAuth)
    }

    useEffect(()=>{
        const unscribe = onAuthStateChanged(auth, currentUser=>{
            setuser(currentUser);
            setloding(false)
        })
        return ()=> unscribe()
    },[])
    

    const authInfo = {user,loding, crateUser, signUser, logoutUser,
         updateUser, signinGoogle}
    return (
        <div>
            <Authcontext.Provider value={authInfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Context;