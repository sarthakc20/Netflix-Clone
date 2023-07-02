import React, { useState } from "react";
import "./LoginScreen.css";
import SingupScreen from "./SingupScreen";
import Footer from "../Footer";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="login_screen_background">
        <img
          className="loginScreen_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} 
        className="loginScreen_button">
          Sign In
        </button>

        <div className="loginScreen_gradient" />
      </div>

      <div className="loginScreen_body">

        {signIn ? (
          <SingupScreen />
        ) :(
          <>
        <h1>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div className="loginScreen_input">
          <form>
            <input type="email" 
            placeholder="Email address"/>
            <button onClick={() => setSignIn(true)}
             className="loginScreen_getScreen">
                GET STARTED
            </button>
          </form>
        </div>
        </>
        )}
        
      </div>

      

      <Footer />
    </div>
  );
}

export default LoginScreen;
