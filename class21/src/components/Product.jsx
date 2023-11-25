import React, { useEffect } from 'react'
import Card from './Card'

import Loader from './Loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/Slices/ProductSlice'


const Product = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state.GetProductsReducer);
    console.log(selector)
    useEffect(()=>{
        dispatch(fetchProducts())
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
                        <div className="col-3" >
                            <Card  />
                        </div>
                        {/* {
                            isLoading ? <Loader />:(
                                data.map(product => (
                                    <div className="col-3" key={product.id}>
                                        <Card product={product} />
                                    </div>
                                ))
                            ) 
                        } */}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Product