import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box,Container,CssBaseline } from "@mui/material";
import { TextField } from "@mui/material";
import { FormControl, FormGroup }  from "@mui/material";
import { FormLabel,FormControlLabel } from "@mui/material";
import { Radio, RadioGroup }  from "@mui/material";
import { Checkbox }  from "@mui/material";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Select } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";


const Submissionform=()=> {

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    
    return(


        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">

        <Box md={{ height: '100vh', padding:20 }} >

        

            <Typography>SUBMISSION FORM</Typography>
            <Divider />
          
            
            <Box sx={{ display:"flex", padding:2, justifyContent:"space-between" }}>
            <TextField id="outlined-basic" label="FirstName" variant="outlined" />
            <TextField id="outlined-basic" label="MiddleName" variant="outlined" />
            <TextField id="outlined-basic" label="LastName" variant="outlined" /><br/><br/>
            </Box>
            
    <FormControl>
    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                 <FormControlLabel value="male" control={<Radio />} label="Male" />
                 <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
    </FormControl>

    <FormGroup >
    <FormLabel id="demo-row-radio-buttons-group-label">Coffee I Like</FormLabel>
      <FormControlLabel control={<Checkbox/>} label="Espresso" />
      <FormControlLabel control={<Checkbox/>} label="Cappuccino" />
      <FormControlLabel control={<Checkbox/>} label="Flat White" />
      <FormControlLabel control={<Checkbox/>} label="Long Black" />
      </FormGroup>
      

      <FormControl  >
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
         onChange={handleChange} 
         >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={60}>60</MenuItem>
          
          </Select>
       </FormControl><br/>
    

    <FormControl  >
        <InputLabel id="demo-simple-select-label">Developer In</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Developer In"
        >
          <MenuItem >UI</MenuItem>
          <MenuItem >API</MenuItem>
          <MenuItem >DataBase</MenuItem>
          <MenuItem >DevOps</MenuItem>
          </Select>
       </FormControl><br/><br/>

    <Button variant="contained">Submit</Button>


        </Box>
      </Container>
    </React.Fragment>
        

    )
}
export default Submissionform;