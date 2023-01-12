import React from "react";
import { Alert, Box } from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { Container } from "@mui/system";
import { Button } from "@mui/material";


const Confirmationform=(props)=>{
    

    return(
 
             <Container maxWidth='md'>

                <Box sx={{bgcolor:"lightGreen",height:'40vh',padding:3}}>

                   <pre>{JSON.stringify(props.form,null,2)}</pre>


                    <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                    <Button variant="contained" color="success">CONFIRM</Button>
                    </Box>
                
                </Box>
                
        </Container>
     )
};
export default Confirmationform;


