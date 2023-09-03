import React from 'react'
import { UserForm } from '../ReactBootstrap'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const signupHandler = (e)=>{
        e.preventDefault();
        navigate("/login")
        
    }
  return (
    <>
        <UserForm isSignup ={true} heading={"SignUp Form"} submitHandler={signupHandler} />
    </>
  )
}

export default SignUp