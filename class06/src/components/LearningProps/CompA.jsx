import React,{useState} from "react";
import CompB from "./CompB";
import "./CompA.css"
import CardsSection from "./CardsSection";

const CompA = ()=>{
    // let [heading,setHeading] = useState()
    let [enableDark,setEnableDark] = useState(false)
    
    // let myHeading = "";
    // if(!heading){
    //     myHeading = <h1>CompA</h1>
    // }else if (heading === "abc"){
    //     myHeading = <h1>abc</h1>
    // }else{
    //     myHeading = "null"
    // }

    return <>
        <div className={`my-container ${enableDark ? "dark" : "light"}`} >
            <h1>First Heading </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet vitae, molestias magnam nemo nostrum cum consequuntur? Et sunt consequuntur nesciunt consectetur deleniti, illo sequi illum! Omnis sunt amet dolorem.</p>
            {/* {enableDark ? <h1>Dark Mode Active</h1>:<h1>Light Mode Active</h1>} */}
        </div>
        {/* { heading && <h1>CompA</h1>} */}
        {/* { !heading ? <h1>CompA</h1> : heading === "ab" ? <h1>abc</h1> : "null"} */}
        {/* {myHeading} */}
        <button onClick={()=>{
            setEnableDark(!enableDark)
        }}>Click to Change Theme</button>
        <CardsSection />

    </>
}

export default CompA