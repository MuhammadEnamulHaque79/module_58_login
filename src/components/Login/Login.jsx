import React, { useState } from 'react';
import './Login.css';
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const handleSignInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                
                setUser(loggedInUser);


            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    const handleSignOut=()=>{
        signOut(auth)
        .then((result)=>{
            console.log(result);
            setUser(null);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className='user-container'>
        {user ? <button onClick={handleSignOut} className='sign-out-btn'>Sign out</button>
        :
        <button onClick={handleSignInWithGoogle} className='login-btn'>Login</button>}

            <div className='user-info'>
                {user && <div>
                    <img src={user.photoURL} alt="" />
                    <h1>User : {user.displayName} </h1>
                    <h2>Email : {user.email}</h2>
                </div>}
            </div>

        </div>
    );
};

export default Login;