import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Helmet } from 'react-helmet';

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div>
    <Helmet>
      <title>Login Page</title>
      <meta name="description" content="Login to start chat with someone" />
      <meta name="keywords" content="account,chat,user,login,mindful,register,sign"></meta>
    </Helmet>

    <div className="formContainer">
      <div className="formWrapper">
      <h1 className="logo" >Mindful Chat</h1>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
    </div>
  );
};

export default Login;
