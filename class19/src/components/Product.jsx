import React, { useEffect, useReducer } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/Actions/Product'


const Product = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.ProductHandlerReducer)
    console.log("selector",selector)
    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return (
        <>
            <section>
                <header>
                    <div className="container ">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-3">
                                <h1>LOGO</h1>
                            </div>
                            <div className="col-3">
                                <span>Cart:- </span><span>0</span>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Card />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Product