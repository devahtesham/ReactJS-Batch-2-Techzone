import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoute = () => {
    const [render,setRender] = useState("")


    useEffect(()=>{
        const isLogin = localStorage.getItem("isLogin")
        if(isLogin){
            setRender(<Outlet />)
        }else{
            navigate("/login")
        }
    },[])
    const navigate = useNavigate()
  return (
    <>
        {render}
    </>
  )
}

export default PrivateRoute