import "./styles.css";
import Home from "./Components/Pages/Home/Home.jsx";
import Login from "./Components/Pages/Login-SignUp/Login";
import SignUp from "./Components/Pages/Login-SignUp/SignUp";
import Initiatives from "./Components/Pages/Initiatives/Initiatives";
import NewsRoom from "./Components/Pages/NewsRoom/NewsRoom";
import Schemes from "./Components/Pages/Schemes/Schemes";
import NavBar from "./Components/Pages/Home/Navbar";
import Register from "./Components/Pages/Register/LinearStepper";
import Stepper from "@material-ui/core/Stepper";
import { BrowserRouter , Routes, Route,Link ,Router} from "react-router-dom";
export default function App() {
  return (
    
    <Router>
  <div className="App">
  <Login/>
  <Home/>
  <Routes>
  <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/login" element={<Login />} ></Route>
    <Route exact path="/signup" element={<SignUp />} />
    <Route exact path="/initiatives" element={<Initiatives />} />
    <Route exact path="/newsroom" element={<NewsRoom />} />
    <Route exact path="/schemes" element={<Schemes />} />
    
  </Routes>
    
    <Schemes/>
    {/* <Login/> */}
    
     
  

      {/* <Register/> */}
      
    </div>
    </Router>
    
  );
}
