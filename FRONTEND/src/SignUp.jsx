import { useState } from "react";
import { useNavigate, } from "react-router-dom"; 
import { ToastContainer } from "react-toastify";

import { handleError, handleSuccess } from "./utils";


const SignUp = () => {
  const navigate = useNavigate();
  const [signupInfo,setsignupInfo] = useState({
    name:"",
    email:"",
    password:""
  })
  
  const handlechange=(e)=>{
    const {name,value} = e.target;
    console.log(name,value);
    const copySignupInfo = {...signupInfo};
    copySignupInfo[name] = value;
    setsignupInfo(copySignupInfo);
  }
  
  const handleSigup=  async (e)=>{
    e.preventDefault();
    const {name,email,password} = signupInfo;
    if(!name || !email || !password){
      return handleError("name,email and password are required");
    } try{
      const url = "http://localhost:5000/auth/signup";
      const response = await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        bdoy:JSON.stringify(signupInfo)
      })
      const result = await response.json();
      const { success, message, error } = result;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
        navigate("/login")},
        1000)
      } else if(error){
        const details = error?.details[0].message;
        handleError(details);

      } else if (!success){
        handleError(message);
      }
      console.log(result);
    } catch(err){
      handleError(err);

    }
  }
  
    
  return (
    <>
   <div className="auth-container">
      
      {/* LEFT BLUE PANEL */}
      <div className="auth-left">
        

        <div className="left-content">
          <h1>New Here?</h1>
          <p>
            Create an account to discover your perfect career path
            with AI-powered recommendations.
          </p>

          <button className="outline-btn" onClick={()=>{navigate("/login");}}>Log In</button>
        </div>
      </div>

      {/* RIGHT LOGIN FORM */}
      <div className="auth-right">
        <h1>Welcome Back</h1>
        <p className="subtitle">Log in to your account</p>

        <form className="auth-form" onSubmit={handleSigup}>
          
          <div className="form-group">
            <label>Full Name</label>
            <input
            value={signupInfo.name}
            onChange={handlechange}
            name="name"
           
             type="text" 
             placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
            value={signupInfo.email}
            name="email"
             onChange={handlechange}
             type="email"
             placeholder="Enter your email" />
          </div>
          

          <div className="form-group">
            <label> Password</label>
            <input 
            value={signupInfo.password}
            name="password"
            onChange={handlechange}
            type="password" placeholder="Enter your password" />
          </div>

          <button className="primary-btn" type="submit">Sign Up</button>
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

    </div>
    <ToastContainer />
    </>
  );
};

export default SignUp;
