import React from "react";
import NavBar from "./Navbar";
import Carousel from "./Carousel";
import Announcements from "./Announcements";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";

function Home() {
  return (
    <div>
      <Carousel />
      <Announcements />
      <Counter vacancies="4500 " recruitments="2500" />
    </div>


  );
}
export default Home;
