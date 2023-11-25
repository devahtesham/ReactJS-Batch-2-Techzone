import React, { useEffect, useReducer } from 'react'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/Actions/Product'
import Loader from './Loader/Loader'


const Product = () => {
    const dispatch = useDispatch()
    const {quantity} = useSelector(state => state.AddToCartHandlerReducer );
    // console.log(selector)
    const {isLoading,data} = useSelector(state => state.ProductHandlerReducer);

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
                                <span>Cart:- </span><span>{quantity}</span>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            isLoading ? <Loader />:(
                                data.map(product => (
                                    <div className="col-3" key={product.id}>
                                        <Card product={product} />
                                    </div>
                                ))
                            ) 
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Product