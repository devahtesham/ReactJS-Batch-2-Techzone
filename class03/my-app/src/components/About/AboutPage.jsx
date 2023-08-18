import React,{useState} from "react";

const AboutPage = () => {
    let [emailText,setEmailText] = useState("")
    let [passwordText,setPasswordText] = useState("")


    const submitHandler = (e)=>{
        e.preventDefault();
        setEmailText("")
        setPasswordText("")
        console.log("Form is submitted !!");
        console.log('emailText',emailText);
        console.log('passwordText',passwordText);
    }

    const emailChangeHandler = (e)=>{
        let value = e.target.value
        setEmailText(value)
    }

    return <>
        <form onSubmit={submitHandler}>
            <h1 className="heading">I am About Page</h1>
            <div>
                <label htmlFor="email">Email Address:- </label>
                <input type="email" name="" id="email" placeholder="Enter your Email" onChange={emailChangeHandler} value={emailText}/>
            </div>
            <div>
                <label htmlFor="password">Password:- </label>
                <input type="password" name="" id="password" placeholder="Enter your Password" onChange={(e)=>setPasswordText(e.target.value)} value={passwordText} />
            </div>
            <button>Submit</button>
            {/* <input type="text" placeholder="Enter any value" onChange={(e) => {
                console.log(e.target.value);
            }} /> <br />
            <button onClick={buttonClickHandler}>Click</button> */}
        </form>
    </>
}



export default AboutPage