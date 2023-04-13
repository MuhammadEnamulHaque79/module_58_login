import React, { useState } from 'react';
import './Login.css';
import app from '../../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";


const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);

    const handleSignInWithGoogle = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);


            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }

    return (
        <div className='user-container'>
            <button onClick={handleSignInWithGoogle} className='login-btn'>Login</button>{' '}
            <button className='sign-out-btn'>Sign out</button>

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