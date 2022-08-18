import React, { useState } from "react";
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
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            required
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
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
          <h5>Upload Scanned Copy of Aadhaar (PDF)</h5>
          <TextField
          required
            id="12Marksheet"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          <br/>
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
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="Female">Female</label>
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <label for="Female">Prefer not to say</label>
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <br />
          <br />
          <h3>Marital Status</h3>
          <label for="Male">Married</label>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label for="Female">Unmarried</label>
          <input type="radio" id="css" name="fav_language" value="CSS" />
          <br />
          <br />
          <h3>Religion Details</h3>
          <TextField
            id="religion"
            label="Religion"
            variant="outlined"
            placeholder="Enter Your Religion"
            fullWidth
            margin="normal"
            name="religion"
          />
          <TextField
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
            id="authority"
            label="Issuing Authority"
            variant="outlined"
            placeholder="Enter the issuing authority"
            fullWidth
            margin="normal"
            name="authority"
          />
          <TextField
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
          <h4>Upload Domicile Certificate</h4>
          <TextField
          required
            id="upload"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          
          <br />
          <br />
        </>
      );
    case 1:
      return (
        <>
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            name="country"
          />
          <TextField
            id="state"
            label="State"
            variant="outlined"
            placeholder="State"
            fullWidth
            margin="normal"
            name="country"
          />
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            name="address1"
          />
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            name="address2"
          />
          <TextField
            id="number"
            label="PIN Code"
            variant="outlined"
            placeholder="Enter YourPin Code"
            fullWidth
            margin="normal"
            name="pincode"
          />
        </>
      );
    case 2:
      return (
        <>
        <h4>10th Board Details</h4>
          <TextField
            id="tenthBoard"
            label="Tenth Board"
            variant="outlined"
            placeholder="Enter Your Board/University"
            fullWidth
            margin="normal"
            name="tenth"
          />
          <TextField
            id="tenthSchool"
            label="School Name"
            variant="outlined"
            placeholder="Enter Your School Name"
            fullWidth
            margin="normal"
            name="school"
          />
          <TextField
            id="tenthMerit"
            label="Merit status of tenth Board"
            variant="outlined"
            placeholder="Enter Your merit status"
            fullWidth
            margin="normal"
            name="tenthMerit"
          />
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
          <br/>
          <h4>Undergraduation Details</h4>
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
          <h5>Enter your College marksheet</h5>
         <TextField
          required
            id="undergradMarksheet"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          <br/>
          <br/>
          <h4>Higher Education Details</h4>
          <TextField
            id="higherBoard"
            label="Board/University"
            variant="outlined"
            placeholder="Enter Board/University"
            fullWidth
            margin="normal"
            name="higher"
          />
        
        </>
      );
      case 3:
        return(<>
        <TextField
            id="collegeNo"
            label="Number of College "
            variant="outlined"
            placeholder="Enter number of colleges worked with"
            fullWidth
            margin="normal"
            name="collegeNo"
          />
        <TextField
            id="current"
            label="Institution working currently "
            variant="outlined"
            placeholder="Enter institution name"
            fullWidth
            margin="normal"
            name="currentInst"
          /> 

        </>);
        case 4:
          return(<>
                <h5>Upload Resume(PDF)</h5>
          <TextField
          required
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
            id="profile"
            type="file"
            inputProps={{
              shrink: true
            }}
          />
          <br/>
          <br/>
          </>)
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
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

export default LinaerStepper;
