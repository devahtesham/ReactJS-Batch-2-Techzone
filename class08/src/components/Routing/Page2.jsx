import React from 'react'
import { Link, NavLink,Outlet,useNavigate } from 'react-router-dom'

const Page2 = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Page2</div>
            <button className='btn btn-primary'>
                <Link to={"/page2/admin"}>Admin</Link>
            </button>
            <button className='btn btn-secondary'>                
                <Link to={"/page2/user"}>User</Link>
            </button>
            <button className='btn btn-danger' onClick={()=>{
                navigate("/page3")
            }}>Go To Next</button>

            <Outlet />
        </>
    )
}

export default Page2