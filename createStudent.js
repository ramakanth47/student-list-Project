import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function AddStudent() {
  const classes = useStyles();
  const [student, setStudent] = useState({
    regId: 0,
    name: "",
    Department: "",
    Email: "",
	Mobile: "",
	Address: "",
	
	
  });
  const createStudent = () => {
    axios.post("http://localhost:5000/students", student).then(()=>{
      window.location.reload(false);
    })
  };
  return (
    <>
      <h1>Add your data</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Reg. Id"
          value={student.regId}
          onChange={(event) => {
            setStudent({ ...student, regId: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Name"
          value={student.name}
          onChange={(event) => {
            setStudent({ ...student, name: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Department"
          value={student.Department}
          onChange={(event) => {
            setStudent({ ...student, Department: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Email"
          value={student.Email}
          onChange={(event) => {
            setStudent({ ...student, Email: event.target.value });
          }}
        />
		<TextField
          id="standard-basic"
          label="Mobile"
          value={student.Mobile}
          onChange={(event) => {
            setStudent({ ...student, Mobile: event.target.value });
          }}
        />
		<TextField
          id="standard-basic"
          label="Address"
          value={student.Address}
          onChange={(event) => {
            setStudent({ ...student, Address: event.target.value });
          }}
        />
        <Button variant="contained" color="primary" onClick={createStudent}>
          Submit
        </Button>
      </form>
    </>
  );
}
