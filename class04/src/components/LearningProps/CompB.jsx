import React from "react";
import CompC from "./CompC";

const CompB = ({heading})=>{
    // let newheading  = props.heading
    // let {heading}  = props
    return <>
        <h4>{heading}</h4>
        <CompC heading={heading}  />
    </>
}

export default CompB