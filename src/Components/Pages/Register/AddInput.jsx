import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SendIcon from "@mui/icons-material/Send";
const useStyles = makeStyles((theme) => ({
  addedInput: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    }
  },
  button: {
    margin: theme.spacing(1),
  }
}));

function AddInput() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    {
      university: "",
      collegeName: "",
      yearOfPassing: "",
      areaOfStudy: ""
    }
  ]);
  const handleSubmit = (e) =>{
     e.preventDefault();
     console.log("InputFields",inputFields);
  }
  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  };
  const handleAddFields = () =>{
    setInputFields([...inputFields,{ university: "",
      collegeName: "",
      yearOfPassing: "",
      areaOfStudy: ""}])
  }
  const handleRemoveFields = (index) =>{
    const values =[...inputFields];
    values.splice(index,1);
    setInputFields(values);
  }
  return (
    <Container>
      <h5>Add Education Details</h5>
      <form className="addedInput" onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              onChange={(event) => handleChangeInput(index, event)}
              name="university"
              variant="filled"
              label="University/Board Name"
              value={inputField.university}
            />
            <TextField
              onChange={(event) => handleChangeInput(index, event)}
              name="collegeName"
              variant="filled"
              label="College Name"
              value={inputField.collegeName}
            />
            <TextField
              onChange={(event) => handleChangeInput(index, event)}
              name="yearOfPassing"
              variant="filled"
              type="number"
              label="Year of passing"
              value={inputField.yearOfPassing}
            />
            <TextField
              onChange={(event) => handleChangeInput(index, event)}
              name="areaOfStudy"
              variant="filled"
              label="Area of Study"
              value={inputField.areaOfStudy}
            />
            <IconButton
            onClick={() => handleRemoveFields(index)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
            onClick={() => handleAddFields()}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
        {/* <Button
          className="classes.button"
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
          endIcon={<SendIcon>send</SendIcon>}
        >
          Send
        </Button> */}
      </form>
    </Container>
  );
}
export default AddInput;
