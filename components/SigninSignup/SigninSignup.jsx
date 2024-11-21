import React, { useState } from "react";
import "./SigninSignup.css";
import UserIcon from "../Assets/person.png";
import EmailIcon from "../Assets/email.png";
import PasswordIcon from "../Assets/password.png";

const SigninSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [errors, setErrors] = useState({}); // State for form validation errors

  const validateForm = () => {
    const newErrors = {};

    if (action === "Sign Up" && !username.trim()) {
      newErrors.username = "Username is required.";
    }

    if (!email.includes("@")) {
      newErrors.email = "Invalid email address.";
    }

    if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    } else {
      if (!/[A-Z]/.test(password)) {
        newErrors.password =
          "Password must include at least one uppercase letter.";
      }
      if (!/[a-z]/.test(password)) {
        newErrors.password =
          "Password must include at least one lowercase letter.";
      }
      if (!/[0-9]/.test(password)) {
        newErrors.password = "Password must include at least one digit.";
      }
      if (!/[!@$%^&*(),.:{}|<>;?"]/.test(password)) {
        newErrors.password =
          "Password must include at least one special character.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSignUp = () => {
    if (validateForm()) {
      console.log("Sign Up successful:", { username, email, password });
      // Add Sign Up API call or processing logic here
    }
  };

  const handleSignIn = () => {
    if (validateForm()) {
      console.log("Sign In successful:", { email, password });
      // Add Sign In API call or processing logic here
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={UserIcon} alt="User Icon" className="src" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </div>
        )}
        <div className="input">
          <img src={EmailIcon} alt="Email Icon" className="src" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="input">
          <img src={PasswordIcon} alt="Password Icon" className="src" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
      </div>
      <div className="submit-container">
        <div
          className="submit"
          onClick={() => {
            setAction("Sign In");
            handleSignIn();
          }}
        >
          Sign In
        </div>
        <div
          className="submit"
          onClick={() => {
            setAction("Sign Up");
            handleSignUp();
          }}
        >
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default SigninSignup;
