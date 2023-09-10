import React, { useContext } from 'react'
import { BsCartFill } from "react-icons/bs"
import "./Header.css"
import { NavLink } from 'react-router-dom'
import { CartItemsContext } from '../../context/CartItems'
const Header = () => {
    const {itemsQuantity} = useContext(CartItemsContext)
    return (
        <section className='bg-dark text-white py-2'>
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-3">
                        <h1 className='m-0'> LOGO </h1>
                    </div>
                    <div className="col-2">
                        <ul className='list-unstyled d-flex align-items-center gap-5 m-0 '>
                            <li>
                                <NavLink to={"/"}>Collection</NavLink>
                            </li>
                            <li>
                                 <NavLink to={"/cart"}>Cart</NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className='col-2'>
                        <span>
                            <BsCartFill size={25} />
                            <sup className='total-value'>{itemsQuantity}</sup>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header