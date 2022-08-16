import React from 'react';
import "./styles.css";
import Home from "./Components/Pages/Home/Home.jsx";
import Login from "./Components/Pages/Login-SignUp/Login.jsx";
import SignUp from "./Components/Pages/Login-SignUp/SignUp.jsx";
import Initiatives from "./Components/Pages/Initiatives/Initiatives.jsx";
import NewsRoom from "./Components/Pages/NewsRoom/NewsRoom.jsx";
import Schemes from "./Components/Pages/Schemes/Schemes.jsx";
import NavBar from "./Components/Pages/Home/Navbar.jsx";
import Register from "./Components/Pages/Register/LinearStepper.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      
      <Router>
        <div className="App">
        <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login />} ></Route>
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/initiatives" element={<Initiatives />} />
            <Route exact path="/newsroom" element={<NewsRoom />} />
            <Route exact path="/schemes" element={<Schemes />} />

          </Routes>

          
        




          {/* <Register/> */}

        </div>
      </Router >
    </div >
  );
}
