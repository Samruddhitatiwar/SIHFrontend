import React from "react";
import NavBar from "./Navbar";
import Carousel from "./Carousel";
import Announcements from "./Announcements";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Counter from "./Counter";
import Footer from "./Footer";
import Steps from "./StepCards";
function Home() {
  return (
    <div>
      <Carousel />
      <Announcements />
      <Counter vacancies="4500 " recruitments="2500" />
      <Steps />
      <Footer />
    </div>


  );
}
export default Home;
