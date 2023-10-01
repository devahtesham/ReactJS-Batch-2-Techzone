import React, { useContext, useEffect, useRef } from 'react'
import { BsCartFill } from "react-icons/bs"
import "./Header.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { CartItemsContext } from '../../context/CartItemsContext'
import { getDocs, db_collection } from "../../firebase/firebase"
import { successToast } from '../Toastify/Toastify'
const Header = () => {
    const navigate = useNavigate()

    const logoutHandler = ()=>{
        // userDetailsRef.current.classlist.add('d-none')
        successToast("user logout Succesfully 🔒")
        localStorage.removeItem('user');
        navigate('/')
    }

    const { itemsQuantity, getAllCartItems} = useContext(CartItemsContext)  // context means step 1

    

    useEffect(() => {
        getAllCartItems()
    }, [])

    // const { itemsQuantity }  = ctx
    return (
        <section className='bg-dark text-white py-2'>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-2">
                        <h1 className='m-0'> LOGO </h1>
                    </div>
                    <div className="col-5">
                        <ul className='list-unstyled d-flex align-items-center gap-5 m-0 '>
                            <li>
                                <NavLink to={"/"}>Signup</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/login"}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/main"}>Collection</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/cart"}>Cart</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='col-1'>
                        <span>
                            <BsCartFill size={25} />
                            <sup className='total-value'>{itemsQuantity}</sup>
                        </span>
                    </div>
                    <div className="col-2 text-end">
                        <button className='btn btn-primary' onClick={logoutHandler}>Logout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header