import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import * as Auth from './../../context/Auth'

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import './Login.css'

const provider = new GoogleAuthProvider();

function LoginPage() {
  const user = useContext(Auth.Context)
  if (user) return (<Navigate to='/' />)

  function signIn() {
    signInWithPopup(getAuth(), provider)
    .then((result) => {
      // // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // // The signed-in user info.
      // const user = result.user;
      // // IdP data available using getAdditionalUserInfo(result)
      // // ...
    }).catch((error) => {
      // // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // // ...
    });
  }

  return (
    <div id="login">
      <div id="login-container">
        <div id="login-contents">
            <h2>One Big App</h2>
            <p id="OBF-email">Please login with your OBF email.</p>
            <p id="disclaimer">One Big App only collects and stores profile information from your Google account, as well as some user-inputted information.</p>

            <GoogleButton onClick={signIn} />
        </div>
      </div>
    </div>
    
  )
}

export default LoginPage
