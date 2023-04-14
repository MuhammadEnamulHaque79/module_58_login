import React, { useState } from 'react';
import './Login.css';
import app from '../../firebase/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";


const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);

    const handleSignInWithGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedInGoogleUser = result.user;
                
                setUser(loggedInGoogleUser);


            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    };

    const handleSingInInWithGithub = ()=>{
        signInWithPopup(auth, githubProvider)
        .then((result)=>{
            const LoggedInGithubUser = result.user;
            console.log(LoggedInGithubUser);
            setUser(LoggedInGithubUser);
        }).catch((error)=>{
            console.log(error);
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
        <div>
            <button onClick={handleSignInWithGoogle} className='login-btn'>LoginWithGoogle</button>{' '}
            <button onClick={handleSingInInWithGithub} className='login-btn'>LoginWithGithub</button>
        </div>
        }
       

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