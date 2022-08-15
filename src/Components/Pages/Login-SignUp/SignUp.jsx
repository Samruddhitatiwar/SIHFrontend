import React from "react";
import {Link} from "react-router-dom";
function SignUp() {
  return (
    <div className="signup">
      <h3>Sign Up</h3>
      <h5>Name</h5>
      <input type="text"></input>

      <h5> Date of Birth </h5>
      <input type="date"></input>

      <h5>Email adress </h5>
      <input type="email"></input>

      <h5>Create new Password </h5>
      <input type="password" required></input>

      <h5>Confirm Password </h5>
      <input type="password" id="myInput" required></input>
      {/* <input type="checkbox" onclick={myFunction()}>
        Show Password
      </input> */}
      <br />
      <button className="submit">
        <Link to="/login">SignUp</Link>
      </button>
    </div>
  );
}

export default SignUp;
