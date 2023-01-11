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

  const [firstname, setFirstName] = useState("")
                        const onfirstnamechange =(event)=>{
                        setFirstName(event.target.value);
     };

  const [middlename, setMiddleName] = useState("")
                         const onmiddlenamechange = (event)=>{
                        setMiddleName(event.target.value);
      };
  const [lastname, setLastName] = useState("")
                        const onlastnamechange = (event)=>{
                          setLastName(event.target.value);
      };
  const [gender, setGender] = useState("")
                        const ongenderchange = (event)=>{
                          setGender(event.target.value);
                        };

  const [espresso,setEspresso] = useState("")
                        const onespressochange = (event)=>{
                          setEspresso(event.target.value);
                        };
                        const [cappuccino,setCappuccino] = useState("")
                        const oncappuccinochange = (event)=>{
                          setCappuccino(event.target.value);
                        };
                        const [flatwhite,setFlatWhite] = useState("")
                        const onflatwhitechange = (event)=>{
                          setFlatWhite(event.target.value);
                        };
                        const [longblack,setLongBlack] = useState("")
                        const onlongblackchange = (event)=>{
                          setLongBlack(event.target.value);
                        };
             
  const [age, setAge] = useState("");
                        const handleChange = (event) => {
                         setAge(event.target.value);
  };

  const [developerin,setDeveloperin]=useState("")
                  const ondeveloperinchange =(event)=>{
                         setDeveloperin(event.target.value)
  };
  

     const Form=()=>{
      const FormInfo={
          Fname:firstname,
          Mname:middlename,
          Lname:lastname,
          Female:female,
          Male:male,
          Other:other,
          Espresso:espresso,
          Cappuccino:cappuccino,
          Flatwhite:flatwhite,
          Longblack:longblack,
          UI:UI,
          API:API,
          DataBase:DataBase,
          DevOps:DevOps
      }
console.log(FormInfo);

     }
    return(


        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">

        <Box sm={{ height: '100vh', padding:20 }} >

        <Box sx={{bgcolor:"orange",display:'flex',flexDirection:'row',justifyContent:'center'}}>Submission Form</Box><br />
            {/*<Typography>SUBMISSION FORM</Typography>*/}
            <Divider />
          
            
            <Box sx={{ display:"flex", padding:2, justifyContent:"space-between" }}>
            <TextField id="outlined-basic" label="FirstName" value={firstname} onChange={onfirstnamechange} variant="outlined" />
            <TextField id="outlined-basic" label="MiddleName" value={middlename} onChange={onmiddlenamechange} variant="outlined" />
            <TextField id="outlined-basic" label="LastName" value={lastname} onChange={onlastnamechange} variant="outlined" /><br/><br/>
            </Box>
       <Box sx={{display:"flex",justifyContent:"space-between" }}>     
    <FormControl >
    <FormLabel id="demo-row-radio-buttons-group-label" value={gender}>Gender</FormLabel>
                <RadioGroup aria-labelledby="demo-row-radio-buttons-group-label" onChange={ongenderchange}
                  name="row-radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                 <FormControlLabel value="male" control={<Radio />} label="Male" />
                 <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
    </FormControl>

    <Box sx={{display:'flex'}}>
      <FormGroup >
    <FormLabel>Coffee I Like</FormLabel>
    
      <FormControlLabel value={espresso} control={<Checkbox/>} onChange={onespressochange} label="Espresso" />
      <FormControlLabel value={cappuccino} control={<Checkbox/>} onChange={oncappuccinochange} label="Cappuccino" />
      <FormControlLabel value={flatwhite} control={<Checkbox/>} onChange={onflatwhitechange} label="Flat White" />
      <FormControlLabel value={longblack} control={<Checkbox/>} onChange={onlongblackchange} label="Long Black" />
      </FormGroup>
      </Box>
      </Box>
      
      
       <Box sx={{display:'flex',padding:2,justifyContent:"space-between" }}>
      <FormControl  sx={{width:350}}>
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
       </FormControl>
    

    <FormControl  sx={{width:350}}>
        <InputLabel id="demo-simple-select-label" value={developerin}>Developer In</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Developer In"
          onChange={ondeveloperinchange}
        >
          <MenuItem value="UI">UI</MenuItem>
          <MenuItem value="API">API</MenuItem>
          <MenuItem value="DataBase">DataBase</MenuItem>
          <MenuItem value="DevOps">DevOps</MenuItem>
          </Select>
       </FormControl>
       </Box><br/><br/>

      <Box sx={{display:'flex:end'}}>
    <Button variant="contained">Submit</Button>
    </Box>

                   
        </Box>
      </Container>
    </React.Fragment>

    
        

    )
}
export default Submissionform;