
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";


import { handleError, handleSuccess } from "./utils";

const LogIn = () => {
  const navigate = useNavigate();

const [loginInfo,setloginInfo] = useState({
    email:"",
    password:""
  })

  const handlechange = (e) => {
   setloginInfo({...loginInfo, [e.target.name]:e.target.value})
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;
    if (  !email || !password) {
      return handleError("email and password are required");
    }
    try {
      const url = "http://localhost:5000/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      console.log(result);
      const { success, message, jwtToken, name, error } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }
      
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="auth-container">
      {/* LEFT BLUE PANEL */}
      <div className="auth-left">
        <div className="left-content">
          <h1>New Here?</h1>
          <p>
            Create an account to discover your perfect career path with
            AI-powered recommendations.
          </p>

          <button
            className="outline-btn"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="auth-right">
        <h1>Welcome Back</h1>
        <p className="subtitle">Log in to your account</p>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input  value={loginInfo.email}
            onChange={handlechange}type="email" name="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input value={loginInfo.password}
            onChange={handlechange} type="password" name="password" placeholder="Enter your password" />
          </div>

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button
             onClick={()=>{navigate("/");}}
            className="primary-btn"
            type="submit"
          >
            Log In
          </button>
        </form>

        <div className="divider">
          <span>Or sign in with</span>
        </div>

        <div className="social-login">
          <button className="social-btn google">
            <span>G</span> Google
          </button>

          <button className="social-btn apple">
            <span></span> Apple
          </button>
        </div>

        <p className="switch-auth">
          Don&apos;t have the account? <span className="link">Sign Up</span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LogIn;
