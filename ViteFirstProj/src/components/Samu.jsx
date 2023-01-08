import React from "react";

const Samu =(props)=>{

    console.log("Data pass from Parent",props.firstname);

    return(

        <p>The name is  {props.firstname}</p>
        


    )
}
export default Samu;