import React from "react";
import { CircularProgress, Divider, FormHelperText, Typography } from "@mui/material";
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
import { useState, useEffect } from "react";
import Confirmationform from "./Confirmationform";



const Submissionform=()=> {

  const [firstname, setFirstName] = useState("")
              
                        const onfirstnamechange =(event)=>{
                          console.log('Firstname >>', event.target.value);
                        setFirstName(event.target.value);
                        const form={...completeform};
                        form.firstname=event.target.value;
                        setCompleteform(form);
     };

  const [middlename, setMiddleName] = useState("")
                         const onmiddlenamechange = (event)=>{
                          console.log('Middlename >>', event.target.value);
                        setMiddleName(event.target.value);
                        const form={...completeform};
                        form.middlename=event.target.value;
                        setCompleteform(form);
      };
  const [lastname, setLastName] = useState("")
                        const onlastnamechange = (event)=>{
                          console.log('Lastname >>', event.target.value);
                          setLastName(event.target.value);
                          const form={...completeform};
                        form.lastname=event.target.value;
                        setCompleteform(form);
      };
  const [gender, setGender] = useState("")
                        const ongenderchange = (event)=>{
                          console.log('Gender >>',event.target.value);
                          setGender(event.target.value);
                          const form={...completeform};
                        form.gender=event.target.value;
                        setCompleteform(form);
                        };

  const [coffee,setCoffee] = useState("")
                        const oncoffeechange = (event)=>{
                          console.log('Cofee i Like >>', event.target.value);
                          setCoffee(event.target.value);
                          const form={...completeform};
                        form.coffee=event.target.value;
                        setCompleteform(form);
                        };
   const [espresso,setEspresso]= useState("") 
                       const onespressochange = (event)=>{
                        console.log('confee i like >>', event.target.value);                         
                          setEspresso(event.target.value);
                          const form={...completeform};
                        form.coffee=event.target.value;
                        setCompleteform(form);
                        };
   const [cappuccino,setCappuccino] = useState("")
                        const oncappuccinochange = (event)=>{
                          console.log('cofee i like >>',event.target.value);
                          setCappuccino(event.target.value);
                          const form={...completeform};
                        form.coffee =event.target.value;
                        setCompleteform(form);
                        };
  const [flatwhite,setFlatWhite] = useState("")
                        const onflatwhitechange = (event)=>{
                          console.log('cofee i like >>',event.target.value);
                          setFlatWhite(event.target.value);
                          const form={...completeform};
                        form.coffee=event.target.value;
                        setCompleteform(form)
                        };
  const [longblack,setLongBlack] = useState("")
                        const onlongblackchange = (event)=>{
                          console.log('cofee i like >>',event.target.value);
                          setLongBlack(event.target.value);
                          const form={...completeform};
                        form.coffee=event.target.value;
                        setCompleteform(form);
                        };
             
  const [age, setAge] = useState("");
                        const handleChange = (event) => {
                          console.log('Age >>',event.target.value);
                         setAge(event.target.value);
                         const form={...completeform};
                        form.age=event.target.value;
                        setCompleteform(form);
  };

  const [developerin,setDeveloperin]=useState("")
                  const ondeveloperinchange =(event)=>{
                    console.log('Developer In >>',event.target.value);
                         setDeveloperin(event.target.value)
                         const form={...completeform};
                        form.developerin=event.target.value;
                        setCompleteform(form);
  };

  const handleSubmit=()=>{

    console.log(completeform);
      setTimeout(() => {
        <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>

        setformToPropogate(completeform);

        
        
      }, 3000);

  }

       
  const [completeform, setCompleteform]=useState({});

  /*useEffect(() => {
    setGender('female');
    setAge(20);


}, [setGender][setAge]);*/


  const [formToPropogate,setformToPropogate]=useState({});

  
  useEffect(() => {
     setGender('other');
     

    }, [setGender]);


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
                <RadioGroup aria-labelledby="demo-row-radio-buttons-group-label" value={gender} onChange={ongenderchange}
                  name="row-radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                 <FormControlLabel value="male" control={<Radio />} label="Male" />
                 <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
    </FormControl>

    <Box sx={{display:'flex'}}>
      <FormGroup >
    <FormLabel value={"coffee"} onChange={oncoffeechange} >Coffee I Like</FormLabel>
    
      <FormControlLabel value={"espresso"} control={<Checkbox/>} onChange={onespressochange} label="Espresso" />
      <FormControlLabel value={"cappuccino"} control={<Checkbox/>} onChange={oncappuccinochange} label="Cappuccino" />
      <FormControlLabel value={"flatwhite"} control={<Checkbox/>} onChange={onflatwhitechange} label="Flat White" />
      <FormControlLabel value={"longblack"} control={<Checkbox/>} onChange={onlongblackchange} label="Long Black" />
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
          <FormHelperText>10,20,30,etc....options</FormHelperText>
       </FormControl>
    

    <FormControl  sx={{width:350}}>
        <InputLabel id="demo-simple-select-label" value={developerin}>Developer In</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Developer In"
          onChange={ondeveloperinchange}
        >
          <MenuItem value={"UI"}>UI</MenuItem>
          <MenuItem value={"API"}>API</MenuItem>
          <MenuItem value={"DataBase"}>DataBase</MenuItem>
          <MenuItem value={"DevOps"}>DevOps</MenuItem>
          </Select>
          <FormHelperText>UI,API,DataBase,DevOps,options</FormHelperText>
       </FormControl>
       </Box><br/><br/>

      <Box sx={{display:"flex",justifyContent:"flex-end"}}>
        {
          
        <Button  variant="contained" disabled={ !completeform.firstname || !completeform.developerin || !completeform.gender} onClick={handleSubmit}>Submit</Button>
        }
        
    </Box>
              

              <pre>{JSON.stringify(completeform, null ,3)}</pre>
              
        </Box>
      </Container>
      <Confirmationform form={formToPropogate} />
    </React.Fragment>

    
        

    )
}
export default Submissionform;