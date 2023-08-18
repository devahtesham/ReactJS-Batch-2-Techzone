import React,{useState} from "react";
import CompB from "./CompB";

const CompA = ()=>{
    let [heading,setHeading] = useState("I am Comp")

    return <>
        <h1>CompA</h1>
        <CompB heading={heading}/>
    </>
}

export default CompA