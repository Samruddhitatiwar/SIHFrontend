import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "./GuruRec.png";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-dark navbar-fixed-top" id="grad1">
        <div className="container-fluid ">
          <Link className="navbar-brand " to="/">
            Home
          </Link>
          <button
            className="navbar-toggler float-end"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/schemes">
                  Schemes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/newsroom">
                  Help
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/initiatives">
                  Facilities
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About Us
                </Link>
              </li>
            </ul>
            <li>
              {/* <button type="button" class="btn btn-dark">
                  <Link className="LoginLink" to="/login"><PersonIcon/></Link>
                </button> */}
              <Link className="LoginLink" to="/login" >
                {" "}
                Login <PersonIcon />
              </Link>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
