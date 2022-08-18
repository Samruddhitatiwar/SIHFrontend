import React from "react";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="Logintotal">
      <PersonAddIcon className="Loginicon" />
      <div className="Loginheading">Sign Up</div>

      <div className="LogininputField">
        <input  className="Logininput" type="text" placeholder="First Name*" />
      </div>
      <div className="LogininputField">
        <input  className="Logininput" type="text" placeholder="Last Name*" />
      </div>
      <div className="LogininputField">
        <input  className="Logininput" type="email" placeholder="Email Address*" />
      </div>
      <div className="LogininputField">
        <input className="Logininput"  type="password" placeholder="Password*" />
      </div>
      <div >
        <button  className="Loginbutton" type="button">
        <Link className="LoginLink" to="/Login"> Sign Up</Link>
        </button>
      </div>
      <br />
      <Link to="/Login"> Already have an account? Sign in</Link>
    </div>
  );
}
export default SignUp;

