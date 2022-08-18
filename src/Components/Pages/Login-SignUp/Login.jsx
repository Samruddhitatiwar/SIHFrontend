import React from "react";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Login() {
  return (
    <div className="Logintotal">
      <AccountBoxIcon className="Loginicon" />
      <div className="Loginheading">Login In</div>
      <div className="LogininputField">
        <input
          className="Logininput"
          type="email"
          placeholder="Enter your email*"
        />
      </div>
      <div className="LogininputField">
        <input
          className="Logininput"
          type="email"
          placeholder="Enter your password*"
        />
      </div>
      <div>
        <button className="Loginbutton" type="button">
        <Link className="LoginLink" to="/LinaerStepper"> Login</Link>
        </button>
      </div>
      <br />
      <Link to="/SignUp"> SignUp</Link>
    </div>
  );
}

export default Login;

