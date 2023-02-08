
  import { Box ,Button} from '@mui/material';
  import React from 'react';
  import { useLocation, useNavigate } from 'react-router-dom';
  
  const Confirm=(props)=>{
      const navigate = useNavigate();
      const {state} =useLocation();
      const {firstname,middlename,lastname}=state;
  
      const Success=()=>{
           navigate("/success");
      }
    return(
      <Box  sx={{
        bgcolor: "lightgreen",
        display: "flex",
        padding: 5
    }}>
        {/*<pre>{JSON.stringify(state)}</pre>*/}
         <table border="1px solid">
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
          {/*<tr>
            <td>gender</td>
            <td>{gname}</td>
          </tr>
          <tr>
            <td>age</td>
            <td>{age1}</td>
          </tr>
          <tr>
            <td>coffee</td>
            <td>{coffee}</td>
          </tr>
          <tr>
            <td>technology</td>
            <td>{technology1}</td>
</tr>*/}
          
        </table> 
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
