import React, { useState } from "react";
import {TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Samu from "./Samu";
import Radio from "@mui/material";
import FormControlLabel from "@mui/material";
import FormControl from "@mui/material";
import RadioGroup from "@mui/material";
import FormLabel from "@mui/material";



const Form=()=> {
    const [firstname,setFirstName]=useState("")
    const [lastname,setLastName]=useState("")
    const [birthdate,setBirthDate]=useState("")

    const data=()=>{
        const Registration={
            Fname:firstname,
            Lname:lastname,
            Birth:birthdate
        };
        console.log(Registration);

    }
    return(

        <div>
             <TextField id="firstname" label="FirstName" variant="filled" onChange={(e)=>setFirstName(e.target.value)} /><br/><br/>
             <TextField id="lastname" label="LastName" variant="filled" onChange={(e)=>setLastName(e.target.value)}/><br/><br/>
             <TextField id="birthdate" label="BirthDate" variant="filled" onChange={(e)=>setBirthDate(e.target.value)}/><br/><br/>
             <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<Radio />}
          label="other"
        />
      </RadioGroup>
    </FormControl>

             <Button variant="contained" onclick={data()}>Submit</Button>
             
             <Samu firstname={firstname}/>
             
             
             </div>
             
             
    );

};
export default Form;



