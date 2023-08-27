import React from 'react'
import { Link, NavLink,Outlet } from 'react-router-dom'

const Page2 = () => {
    return (
        <>
            <div>Page2</div>
            <button className='btn btn-primary'>
                <Link to={"/page2/admin"}>Admin</Link>
            </button>
            <button className='btn btn-secondary'>                
                <Link to={"/page2/user"}>User</Link>
            </button>
            <button className='btn btn-danger'>Go To Next</button>

            <Outlet />
        </>
    )
}

export default Page2