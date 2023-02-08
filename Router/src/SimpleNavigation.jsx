import React from "react";
import { Box, Link } from "@mui/material";
import { Outlet } from "react-router-dom";


const SimpleNavigation = (props) => {
    return(
        <Box>
        <Box sx={{ //border:"1px solid red",
        display: "flex", 
        flexDirection: "row",
        justifyContent: "space-between", 
        typography: 'body1' 
        }}
       >
        <Link href="/home">Home</Link> 
        <Link href="/welcome">Welcome</Link>
        <Link href="/submissionform">Submissionform</Link>
               <Box>
               <Outlet />
               </Box>
        </Box>
        </Box>
    );
};
export default SimpleNavigation;