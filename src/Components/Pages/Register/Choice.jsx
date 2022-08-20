import React from 'react'
import Button from "@material-ui/core/Button";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import SchoolIcon from '@mui/icons-material/School';
import {  Router, Switch, Route, Link ,useNavigate} from "react-router-dom";
const Choice = () => {
  const navigate=useNavigate();
  const registerPage = () => {
    navigate('/register')
}
  return (
    <div className='row' style={{marginTop:"40px",marginBottom:"300px"}}>
    <div className='col' style={{borderRight:"3px solid grey"}}>
    
<EmojiPeopleIcon fontSize='large'/><br/><br/>
  <Button
  type="submit"
  variant="contained"
  color="primary"
  onClick={registerPage}
  >
  Register as Faculty
  </Button>
    </div>
    <div className='col'>
    <SchoolIcon fontSize='large'/><br/><br/>
    <Button
  type="submit"
  variant="contained"
  color="primary"
  
  >
  Register as College
  </Button>           
    </div>
    </div>
    

  );
};

export default Choice;