import { Box, Button } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";


const Welcome = (props) =>{

    const navigate=useNavigate();
    const goToSubmissionform = () =>{
            navigate("/submissionform");
    };
return(
       <Box>

        <Button variant="contained" onClick={goToSubmissionform}>Go To Submission form</Button>

        </Box>

  );
};
export default Welcome;