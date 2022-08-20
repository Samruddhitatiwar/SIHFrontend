import React, { useState } from "react";
import SaveIcon from '@mui/icons-material/Save';
import AddInput from "./AddInput";
import AddInput2 from "./AddInput2";
import {
  Typography,
  TextField,
  MenuItem,
  Button,
  Stepper,
  Step,
  StepLabel
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1)
  }
}));

function getSteps() {
  return [
    "Main Info",
    "Address Info",
    "Qualification Info",
    "Experience Details",
    "Document Upload"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <h3>Title Details</h3>
          <TextField
            required
            id="first-name"
            label="First Name"
            variant="filled"
            placeholder="Enter Your First Name"
            
            margin="normal"
            name="firstName"
          />{" \n"}
          <TextField
            required
            id="last-name"
            label="Last Name"
            variant="filled"
            placeholder="Enter Your Last Name"
            
            margin="normal"
            name="lastName"
          />
          <TextField
            required
            id="aadhaar"
            label="Aadhaar Number"
            variant="outlined"
            placeholder="Enter Your Aadhaar Number"
            fullWidth
            margin="normal"
            name="aadhaar"
          />
          
          <br/>
          <h3>Contact Details</h3>
          <TextField
            required
            id="email"
            label="Email Address"
            variant="outlined"
            placeholder="Enter Your Email Address"
            fullWidth
            margin="normal"
            name="email"
          />
          <TextField
            required
            id="contact"
            label="Contact Number"
            variant="outlined"
            placeholder="Enter Your Contact Number"
            fullWidth
            margin="normal"
            name="contact"
          />
          <TextField
          required
            id="alternate-phone"
            label="Alternate Contact Number"
            variant="outlined"
            placeholder="Enter Your Alternate Contact Number"
            fullWidth
            margin="normal"
            name="alternatePhone"
          />
          <h3>Personal Details</h3>
          <TextField
          required
            id="dateofbirth"
            label="Date of Birth"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true
            }}
          />
          <h3>Gender</h3>
          <label for="Male">Male</label>
          <input type="radio" id="html" name="fav_language" value="HTML" required/>
          <label for="Female">Female</label>
          <input type="radio" id="css" name="fav_language" value="CSS" required/>
          <label for="Female">Prefer not to say</label>
          <input type="radio" id="css" name="fav_language" value="CSS" required/>
          <br />
          <br />
          <h3>Marital Status</h3>
          <label for="Male">Married</label>
          <input type="radio" id="html" name="fav_language" value="HTML" required/>
          <label for="Female">Unmarried</label>
          <input type="radio" id="css" name="fav_language" value="CSS" required/>
          <br />
          <br />
          <h3>Religion Details</h3>
          <TextField
          required
            id="religion"
            label="Religion"
            variant="outlined"
            placeholder="Enter Your Religion"
            fullWidth
            margin="normal"
            name="religion"
          />
          <TextField
          required
            id="caste"
            label="Caste"
            variant="outlined"
            placeholder="Enter Your Caste Details"
            fullWidth
            margin="normal"
            name="caste"
          />
          <h3>Domicile Details</h3>
          <TextField
            required
            id="domicile number"
            label="Domicile Number"
            variant="outlined"
            placeholder="Enter your Domicile Number"
            fullWidth
            margin="normal"
            name="domicile"
          />
          <TextField
          required
            id="authority"
            label="Issuing Authority"
            variant="outlined"
            placeholder="Enter the issuing authority"
            fullWidth
            margin="normal"
            name="authority"
          />
          <TextField
          required
            id="date"
            label="Date of Issue"
            variant="standard"
            type="date"
            defaultValue="2017-05-24"
            InputLabelProps={{
              shrink: true
            }}
          />
          <br />
          <br />
          
          <br />
          <Button
            variant="contained"
          color="primary"
          type="submit"
          >
            <SaveIcon   />Save
          </Button>
          <br/>
          <br/>
        </>
      );
    case 1:
      return (
        <>
          <TextField
          required
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            name="country"
          />
          <TextField
          required
            id="state"
            label="State"
            variant="outlined"
            placeholder="State"
            fullWidth
            margin="normal"
            name="country"
          />
          <TextField
          required
            id="city"
            label="City"
            variant="outlined"
            placeholder="City"
            fullWidth
            margin="normal"
            name="city"
          />
          <TextField
          required
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"
          />
          <TextField
          required
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"
          />
          <TextField
          required
            id="number"
            label="PIN Code"
            variant="outlined"
            placeholder="Enter YourPin Code"
            fullWidth
            margin="normal"
            name="pincode"
          />
          <Button
            variant="contained"
          color="primary"
          type="submit"
          >
            <SaveIcon   />Save
          </Button>
          <br/>
          <br/>
        </>
      );
    case 2:
      return (
        <>
        <h4>10th Board Details</h4>
          <TextField
          required
            id="tenthBoard"
            label="Tenth Board"
            variant="outlined"
            placeholder="Enter Your Board/University"
            fullWidth
            margin="normal"
            name="tenth"
          />
          <TextField
          required
            id="tenthSchool"
            label="School Name"
            variant="outlined"
            placeholder="Enter Your School Name"
            fullWidth
            margin="normal"
            name="school"
          />
          <TextField
          required
            id="tenthMerit"
            label="Merit status of tenth Board"
            variant="outlined"
            placeholder="Enter Your merit status"
            fullWidth
            margin="normal"
            name="tenthMerit"
          />
          
          <br/>
          {/* 12 details */}
          <h4>12th Board Details</h4>
          <TextField
          required
            id="12Board"
            label="Twelfth Board"
            variant="outlined"
            placeholder="Enter Your Board/University"
            fullWidth
            margin="normal"
            name="twelfth"
          />
          <TextField
          required
            id="college"
            label="College Name"
            variant="outlined"
            placeholder="Enter Your College Name"
            fullWidth
            margin="normal"
            name="college"
          />
          <TextField
          required
            id="12Merit"
            label="Merit status of twelfth Board"
            variant="outlined"
            placeholder="Enter Your merit status"
            fullWidth
            margin="normal"
            name="12Merit"
          />
          
          <br/>
          <h4>Undergraduation/Diploma Details</h4>
          <TextField
          required
            id="undergrad"
            label="University Name"
            variant="outlined"
            placeholder="Enter Your University"
            fullWidth
            margin="normal"
            name="undergrad"
          />
          <TextField
          required
            id="collegeName"
            label="College Name"
            variant="outlined"
            placeholder="Enter Your College Name"
            fullWidth
            margin="normal"
            name="collegeName"
          />
          <TextField
          required
            id="branch"
            label="Branch"
            variant="outlined"
            placeholder="Enter Your Branch Name"
            fullWidth
            margin="normal"
            name="branchName"
          />
          
          <br/>
          <h4>Higher Education Details</h4>
          <AddInput/>
          <br/>
          <br/>
          {/* <TextField
            id="higherBoard"
            label="Board/University"
            variant="outlined"
            placeholder="Enter Board/University"
            fullWidth
            margin="normal"
            name="higher"
          /> */}
          {/* <TextField
          required
            id="collegeName2"
            label="College Name"
            variant="outlined"
            placeholder="Enter Your College Name"
            fullWidth
            margin="normal"
            name="collegeName2"
          /> */}
          {/* <TextField
          required
            id="branch2"
            label="Branch"
            variant="outlined"
            placeholder="Enter Your Branch Name"
            fullWidth
            margin="normal"
            name="branchName2"
          /> */}
        <Button
            variant="contained"
          color="primary"
          type="submit"
          >
            <SaveIcon   />Save
          </Button>
          <br/>
          <br/>
        </>
      );
      case 3:
        return(<>
       
        <TextField
            id="current"
            label="Institution working currently "
            variant="outlined"
            placeholder="Enter institution name"
            fullWidth
            margin="normal"
            name="currentInst"
          /> 
          <AddInput2/>
        <Button
            variant="contained"
          color="primary"
          type="submit"
          >
            <SaveIcon   />Save
          </Button>
          <br/>
          <br/>
        </>);
        case 4:
          return(<>
          <h5>Upload Scanned Copy of Aadhaar (PDF)</h5>
          <TextField
          required
          name="aadhaarpdf"
            id="12Marksheet"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          <br/>
          <h4>Upload Nationality Proof Certificate(PDF)</h4>
          <TextField
          required
            name="nationalitypdf"
            id="upload"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          
          <br />
          <h5>Upload your tenth marksheet</h5>
          <TextField
          required
            id="tenthMarksheet"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          <br/>
          <h5>Upload your 12th Board marksheet</h5>
          <TextField
          required
            id="12Marksheet"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          <br/>
          <h5>Upload your Degree</h5>
         <TextField
          required
            id="undergradMarksheet"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          <br/>
                <h5>Upload Resume(PDF)</h5>
          <TextField
          required
          name="resumepdf"
            id="Resume"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          <br/>
          <br/>
          <h5>Upload Profile Picture(.png)</h5>
          <TextField
          required
          name="profilepng"
            id="profile"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          <br/>
          <br/>
          <Button
            variant="contained"
          color="primary"
          type="submit"
          >
            <SaveIcon   />Save
          </Button>
           <br/>
          <br/>
          </>)
    default:
      return "unknown step";
  }
}

const LinearStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div>
      <Stepper  activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h5" align="center">
          Thank You! You will be notified when your profile verification is completed.
        </Typography>
      ) : (
        <>
          <form>{getStepContent(activeStep)}</form>
          <Button
            className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            back
          </Button>

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
};

export default LinearStepper;
