import React from "react";
import {Link} from "react-router-dom";
const Login=()=> {
  
  return (
    <div>
      <h5 className="styleLoginInputs">Email</h5>
      <input
        type="email"
        placeholder="Enter your email"
        
        required
        id="email"
      ></input>
      <br />
      <h5 className="styleLoginInputs">Password</h5>
      <input type="password" placeholder="Password" required></input>
      <br />
      <button>
        <Link to="/">Login</Link>
      </button>
      <h5>
        Do you want to create an account?<Link to="/signup">SignUp</Link>
      </h5>
    </div>
  );
};
export default Login;
