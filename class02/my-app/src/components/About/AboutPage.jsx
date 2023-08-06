import React from "react";

const AboutPage = () => {

    // button click
    const buttonClickHandler = () => {
        console.log('message')
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("Form is submitted !!");
    }


    return <>
        <form onSubmit={(e)=>{submitHandler(e)}}>
            <h1 className="heading">I am About Page</h1>
            <div>
                <label htmlFor="email">Email Address:- </label>
                <input type="email" name="" id="email" placeholder="Enter your Email" />
            </div>
            <div>
                <label htmlFor="password">Password:- </label>
                <input type="password" name="" id="password" placeholder="Enter your Password" />
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