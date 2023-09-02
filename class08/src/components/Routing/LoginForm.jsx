import React from 'react'
import { UserForm } from '../ReactBootstrap'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    const navigate = useNavigate()
     const loginHandler = (e)=>{
        e.preventDefault();
         navigate("/page1")

        localStorage.setItem("isLogin",true)
    }
    return (
        <>
            <UserForm isSignup ={false} heading={"Login Form"} submitHandler={loginHandler} />
        </>
    )
}

export default LoginForm