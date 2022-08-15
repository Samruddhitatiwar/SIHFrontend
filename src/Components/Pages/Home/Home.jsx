import React from "react";
import NavBar from "./Navbar";
import Carousel from "./Carousel";
import Announcements from "./Announcements";
import { BrowserRouter , Routes, Route,Link } from "react-router-dom";
import Login from "../Login-SignUp/Login";
import SignUp from "../Login-SignUp/SignUp";
import Initiatives from "../Initiatives/Initiatives";
import NewsRoom from "../NewsRoom/NewsRoom";
import Schemes from "../Schemes/Schemes";

function Home() {
  return (
    <div>
      <NavBar />
    <Carousel />
        <Announcements />
    </div>

   
  );
}
export default Home;
