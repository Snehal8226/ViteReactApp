import React from "react";
import { TextField } from "@mui/material";
import Radio from "@mui/material";
import FormLabel from "@mui/material";
import FormControlLabel from "@mui/material";
import FormControl from "@mui/material";
import RadioGroup from "@mui/material";

function Form() {

    return(
        <div class="Fields">
             <TextField id="firstname" label="FirstName" variant="filled" /><br/><br/>
             <TextField id="lastname" label="lastName" variant="filled" /><br/>
             <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
        </div>
    )

}
export default Form;



