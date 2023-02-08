
  import { Box ,Button} from '@mui/material';
  import React from 'react';
  import { useLocation, useNavigate } from 'react-router-dom';
  
  const Confirm=(props)=>{
      const navigate = useNavigate();
      const {state} =useLocation();
      const {completeform}=state;
  
      const Success=()=>{
           navigate("/success");
      }
    return(
      <Box  sx={{
        bgcolor: "lightgreen",
        display: "flex",
        flexDirection:"column",
        padding: 5
    }}>
        <pre>{JSON.stringify(completeform)}</pre>
         {/*<table border="1px solid">
          <tr>
            <td>firstname</td>
            <td>{firstname}</td>
          </tr>
          <tr>
            <td>middlename</td>
            <td>{middlename}</td>
          </tr>
          <tr>
            <td>lastname</td>
            <td>{lastname}</td>
          </tr>
          <tr>
            <td>gender</td>
            <td>{gender}</td>
          </tr>
          <tr>
            <td>age</td>
            <td>{age}</td>
          </tr>
          <tr>
            <td>selectedcoffees</td>
            <td>{selectedcoffees}</td>
          </tr>
          <tr>
            <td>developerin</td>
            <td>{developerin}</td>
</tr>
          
</table>*/} 
      <Box>
          <Button variant='contained'
          onClick={Success}
          >
              accept</Button>
              </Box>
              </Box>          
      
      
    )
       
  }
  export default Confirm;
