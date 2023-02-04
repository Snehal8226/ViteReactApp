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
                                                                   //console.log('Middlename >>', event.target.value);
                        setMiddleName(event.target.value);

                        const form={...completeform};
                        form.middlename=event.target.value;
                        setCompleteform(form);
      };
  const [lastname, setLastName] = useState("")
                        const onlastnamechange = (event)=>{
                                                                  //console.log('Lastname >>', event.target.value);
                          setLastName(event.target.value);
                          const form={...completeform};
                        form.lastname=event.target.value;
                        setCompleteform(form);
      };
  const [gender, setGender] = useState("")
                        const ongenderchange = (event)=>{
                                                             //console.log('Gender >>',event.target.value);
                          setGender(event.target.value);
                          const form={...completeform};
                        form.gender=event.target.value;
                        setCompleteform(form);
                        };

    const [selectedcoffees, setSelectedcoffees] =useState([]);                   

  {/*const [coffee,setCoffee] = useState("")
                        const oncoffeechange = (event)=>{
                                                        //console.log('Cofee i Like >>', event.target.value);
                          setCoffee(event.target.value);
                          const form={...completeform};
                        form.coffee=event.target.value;
                        setCompleteform(form);
                        };
   const [espresso,setEspresso]= useState("espresso") 
                       const onespressochange = (event)=>{
                                                         //console.log('confee i like >>', event.target.value);                         
                          setEspresso(event.target.value);
                          const form={...completeform};
                        form.coffee=event.target.value;
                        setCompleteform(form);
                        };
   const [cappuccino,setCappuccino] = useState("cappuccino")
                        const oncappuccinochange = (event)=>{
                                                             //console.log('cofee i like >>',event.target.value);
                          setCappuccino(event.target.value);
                          const form={...completeform};
                        form.coffee =event.target.value;
                        setCompleteform(form);
                        };
  const [flatwhite,setFlatWhite] = useState("flatewhite")
                        const onflatwhitechange = (event)=>{
                                                              // console.log('cofee i like >>',event.target.value);
                          setFlatWhite(event.target.value);
                          const form={...completeform};
                        form.coffee=event.target.value;
                        setCompleteform(form)
                        };
  const [longblack,setLongBlack] = useState("longblack")
                        const onlongblackchange = (event)=>{
                                                               // console.log('cofee i like >>',event.target.value);
                          setLongBlack(event.target.value);
                          const form={...completeform};
                        form.coffee=event.target.value;
                        setCompleteform(form);
                        };*/}
             
  const [age, setAge] = useState("");
                        const handleChange = (event) => {
                                                                //console.log('Age >>',event.target.value);
                         setAge(event.target.value);
                         const form={...completeform};
                        form.age=event.target.value;
                        setCompleteform(form);
  };

  const [developerin,setDeveloperin]=useState("API")
                  const ondeveloperinchange =(event)=>{
                                                                  //console.log('Developer In >>',event.target.value);
                         setDeveloperin(event.target.value)
                         const form={...completeform};
                        form.developerin=event.target.value;
                        setCompleteform(form);
  };

  const [submitionInProgress,setSubmitionInProgress] = useState(false)
                 


   const handlecoffeechange = (event, type) => {
   console.log(`${type} Value is - ${event.target.checked}`);
    //determine the type
    //determine wether it is selcted/unselected
    //if selected
    //Add in selected state
    //else
    //remove from selected state
if(event.target.checked){
  const temp=[...selectedcoffees];
  temp.push(type);
  setSelectedcoffees(temp)

  const form={...completeform};
  form.selectedcoffees=temp;
  setCompleteform(form);

}else{
 //loop over existing selected coffee
 //for type that is unchecked, remove it
 const temp=[];
 selectedcoffees.forEach((coffee) => {
  if (coffee !== type) {
    temp.push(coffee);
     } 
 })

   setSelectedcoffees(temp);

  const form={...completeform};
  form.selectedcoffees=temp;
  setCompleteform(form);

}



   }
  const handleSubmit=()=>{
        console.log(completeform);
        setSubmitionInProgress(true);
    
           setTimeout(() => {
                              setformToPropogate(completeform);
                              setSubmitionInProgress(false);
                              

                             }, 3000);

  }
  /*const progress=()=>{
    return(

      <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>

    )
  }*/

       
  const [completeform, setCompleteform]=useState({});

  const [formToPropogate,setformToPropogate]=useState({});

  /*useEffect(() => {
    setGender('female');
    setAge(20);


}, [setGender][setAge]);*/


  

  
  useEffect(() => {
     setGender('other');
     }, [setGender]);


    return(


        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">

        <Box sm={{ height: '100vh', padding:20, }} >

        <Box sx={{bgcolor:"orange",display:'flex',justifyContent:'center'}}>Submission Form</Box><br />
             <Box sx={{ border:'2px dashed teal',padding:3 }}>
            <Typography >Personal Information </Typography>
            <Divider />
            
            <Box sx={{ display:"flex", padding:2 , justifyContent:"space-between" }}>
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

    <Box sx={{display:'flex',border:"black"}}>
      <FormGroup >
    <FormLabel >Coffee I Like</FormLabel>
    
      <FormControlLabel control={<Checkbox/>} onChange={(event) => handlecoffeechange(event,"Espresso")} label="Espresso" />
      <FormControlLabel control={<Checkbox/>} onChange={(event) => handlecoffeechange(event,"Cappuccino")} label="Cappuccino" />
      <FormControlLabel control={<Checkbox/>} onChange={(event) => handlecoffeechange(event,"Flat White")} label="Flat White" />
      <FormControlLabel control={<Checkbox/>} onChange={(event) => handlecoffeechange(event,"Long Black")} label="Long Black" />
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
        <InputLabel id="demo-simple-select-label" >Developer In</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Developer In" 
          value={developerin}
          onChange={ondeveloperinchange}
        >
          <MenuItem value="UI">UI</MenuItem>
          <MenuItem value="API">API</MenuItem>
          <MenuItem value="DataBase">DataBase</MenuItem>
          <MenuItem value="DevOps">DevOps</MenuItem>
          </Select>
          <FormHelperText>UI,API,DataBase,DevOps,options</FormHelperText>
       </FormControl>
       </Box>
       <br/><br/>

      <Box sx={{display:"flex",justifyContent:"flex-end"}}>
        {/*
          
        <Button  variant="contained" disabled={ !completeform.firstname || !completeform.developerin || !completeform.gender} onClick={handleSubmit}>Submit {JSON.stringify(submitionInProgress)}</Button>
        }
      {submitionInProgress && <CircularProgress />*/}
      {submitionInProgress ? (
        <CircularProgress />
      ) : (
        <Button  variant="contained" 
        disabled={ !completeform.firstname || !completeform.developerin || !completeform.gender} 
        onClick={handleSubmit}>Submit {JSON.stringify(submitionInProgress)}
        </Button>
      )}

          {/*
            <Button  variant="contained" 
            disabled={submitionInProgress} 
            endIcon/startIcon={submitionInProgress ? <CircularProgress /> : <></>}
            onClick={handleSubmit}>Submit {JSON.stringify(submitionInProgress)}
            </Button>

      */}
       </Box> 
        
    </Box>
    
               <pre>{JSON.stringify(completeform, null ,3)}</pre>
              
        </Box>
      </Container>

      <Confirmationform form={formToPropogate} />

    </React.Fragment>
    )
}
export default Submissionform;