import React, { useState } from "react";
import { Box,Container,CssBaseline, Divider, Typography } from "@mui/material";
import { TextField }  from "@mui/material"
import { Radio,RadioGroup} from "@mui/material";
import { FormControl,FormControlLabel,FormLabel } from "@mui/material";
import { padding } from "@mui/system";
import { Grid } from "@mui/material";


const Admissionform = () => {

    const [firstname, setFirstName]=useState("")
    const [lastname, setLastName]=usestate("")

    const onchangeFirstName=(event)=>{

        console.log(event);
    }

    return(

        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' , padding: 10 }}>

        <Typography variant="h5">ADMISSION FORM</Typography><br/><br/>
        <Divider/> 

        <Typography variant="h7">INFORMATION OF THE CHILD</Typography><br/><br/> 
        <TextField id="outlined-basic" label="FirstName"  value={firstname} variant="outlined" onChange={onchangeFirstName} />
        <TextField id="outlined-basic" label="LastName" value={lastname} variant="outlined" /><br/><br/>
        <TextField id="outlined-basic" label="Birthdate" variant="outlined" />
        
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
    </RadioGroup>
    </FormControl>
    <TextField id="outlined-basic" label="Religion" variant="outlined" /><br/><br/>
    <TextField id="outlined-basic" label="Class for which Admission is sought" variant="outlined" />
    <TextField id="outlined-basic" label="Age As on 1st April 20----" variant="outlined" /><br/><br/>
    <TextField id="outlined-multiline-static" label="Current Address" multiline rows={4} />
    <TextField id="outlined-multiline-static" label="Permanant Address" multiline rows={4} />
    <Divider/>
    <Typography variant="h7">FAMILY INFORMATION</Typography><br/><br/>
    <TextField id="outlined-basic" label="Religion" variant="outlined" /><br/><br/> 
    
                </Box>
         </Container>
    </React.Fragment>
    )
}
export default Admissionform;