import React, { useState } from 'react';
import Stepper from "@material-ui/core/Stepper";
import { Typography,StepLabel ,Step ,TextField} from '@material-ui/core';
import Button from "@material-ui/core/Button";
function getSteps() {
  return [
    "Main Info","Address Info","Qualification Details","Experience Details","Documents",
  ];
}
function getStepContent(step){
   switch(step){
    case 0:

    case 1:
      return(<>
        <input type="text" label=" First name"/>
        <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            name="emailAddress"
          />
          <input></input>
      </>);
    case 2:
      return(<>
        <input type="text" label=" First name"/>
        <TextField
            id="email"
            label="contact number"
            variant="outlined"
            placeholder="Enter Your contact number"
            fullWidth
            margin="normal"
            name="emailAddress"
          />
      </>);
    case 3:
      return(<>
        <input type="text" label=" First name"/>
        <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your address"
            fullWidth
            margin="normal"
            name="emailAddress"
          />
      </>);
    case 4:
      return(<>
        <input type="text" label=" First name"/>
        <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your name"
            fullWidth
            margin="normal"
            name="emailAddress"
          />
      </>);
    default:
      return "unknown step";

   }
}
const Register =() =>  {
  const [activeStep,setActiveStep]=useState(0);
//   1 step is completed
const steps=getSteps();
const nextStep = () =>{
                      if(activeStep<5)
       setActiveStep((activeStep => activeStep+1))
}
const previousStep = () =>{
                      if(activeStep !=-1)//activeStep=-1 means no step is completed
                      setActiveStep((activeStep => activeStep-1))
               }

  return(   <div>
                 {
                  activeStep===5 ?(
                    <>
                    <Typography variant='h5'>ThankYou your details are taken for verfication</Typography>
                    <Typography variant='h6'>You will be notified when details are verified</Typography>

                    </>

                  ):(                 
                    <>
                    <Stepper activeStep={activeStep}>{/* orientation=vertical */}
                    {
                      steps.map((step,index) =>{
                        return (
                          <Step>
                            <StepLabel>{step}</StepLabel>
                          </Step>

                      );
                      }
                      )
                    }
    
                 </Stepper>
                 <>
                 <form> 
              {getStepContent(activeStep)}
                 </form>

                 {/* <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form> */}

                    <Button variant='outlined' color='primary'  onClick={() => nextStep()}>{activeStep===4?"Finish":"Next"} </Button>
                 <br/>
                 <br/>
                 <Button variant='outlined' color='primary' disabled = {activeStep === 0} onClick={() => previousStep()}>Previous </Button>
                 </>
                  </>)
                 }

                 </div>   
                 
                 );
}
export default Register;