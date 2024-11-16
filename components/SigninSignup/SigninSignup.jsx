import React, { useState } from "react"; // Import useState
import "./SigninSignup.css";

import UserIcon from "../Assets/person.png";
import EmailIcon from "../Assets/email.png";
import PasswordIcon from "../Assets/password.png";

const SigninSignup = () => {
  //state for login/signup
  //React hook useState-->Provides variable or function to shift data
  //variable--action || Function-->setAction
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={UserIcon} alt="User Icon" className="src" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input">
          <img src={EmailIcon} alt="Email Icon" className="src" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={PasswordIcon} alt="Password Icon" className="src" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">
        Forgot Password? <span>Click here!</span>
      </div>
      <div className="submit-container">
        <div className={action === "Sign in" ? "Submit gray" : "submit"}>
          Sign In
        </div>
        <div></div>
        <div className={action === "Signup" ? "Submit gray" : "submit"}>
          Sign In
        </div>
      </div>
    </div>
  );
};

export default SigninSignup;
