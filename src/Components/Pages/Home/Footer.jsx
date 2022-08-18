import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { margin } from '@mui/system';
const Footer = () => {
  return (
    <div className='footer'>
       <div className='container'>
        <div className='row'>
           <div className='col-md-6'>
             <div className='follow-box flo-box'>
                <h3>Follow Us</h3>
                <ul >
                      <li>
                      <a href=""><FacebookIcon style={{ color: "white" }}/></a>
                      </li>
                      <li>
                      <a href=""><InstagramIcon style={{ color: "white" }}/></a>
                      </li>
                      <li>
                      <a href=""><TwitterIcon style={{ color: "white" }}/></a>
                      </li>
                </ul>
                <p style={{marginTop: "15px"}}>© 2022-23 GuruRec Portal. All rights reserved</p>

             </div>
           </div>
           <div class="col-md-6">
                <div class="contact-box ">
                    <h3>Contact Us</h3>
                    <ul>
                      <li><PhoneIcon style={{ color: "white", margin:"10px"}}/>+91 8329886274</li>
                      <li><EmailIcon style={{ color: "white" , margin:"10px"}}/> Email: gururec@aicte.org</li>
                    </ul>
                </div>
            </div>
           
        </div>
       </div>
    </div>
  )
}

export default Footer;