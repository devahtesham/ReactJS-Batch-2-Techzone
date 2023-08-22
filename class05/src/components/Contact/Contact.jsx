import {useState} from "react";


const Contact = ()=>{
// const response = useState();
// const [stateVariable,stateUpdatingFunction] = useState();   // Array Destructuring
let [message,setMessage] = useState("Hello, i am Contact Page")
console.log("i am contact comp");
/*
    Hooks:-
        Hooks basically a collection of special type of functions that react provide to us. It is represented by use keyword
    State:-
        State are special type of variables that update on virtual DOM at real time
*/
    // let message = "Hello, i am Contact Page"
    const textChangehandler = ()=>{

        // console.log("i am calling ");
        setMessage("I am changing text")
        // message = "I am changing text"
        // console.log(message);
    }
    return <>
        <h1>{message}</h1>
        <button onClick={textChangehandler}>Click To Change The Text</button>
    </>
}

export default Contact