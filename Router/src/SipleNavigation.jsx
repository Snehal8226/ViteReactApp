import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const SipleNavigation = (props)=>{
    return(
        <Box sx={{ typography: 'body1' }}>
        <Link href="/">Home</Link>
        <Link href="/Submissionform">Submissionform</Link>
        </Box>
    );
};
export default SipleNavigation;