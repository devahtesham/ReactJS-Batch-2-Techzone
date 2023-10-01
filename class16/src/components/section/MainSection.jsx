import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import Loader from "../Loader/Loader"
import { CartItemsContext } from '../../context/CartItemsContext'

const MainSection = () => {
  const {fetchproducts,allproducts,isLoading} = useContext(CartItemsContext)

    useEffect(() => {
        fetchproducts()
    }, [])

    
    return (
        <div className='container mt-5'>
            <div className="row">
                {
                    isLoading ? <Loader />:
                    allproducts.slice(0, 10).map((product) => (
                        <div key={product.id} className="col-3">
                            <Card product={product} className="mb-4"/>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    )
}

export default MainSection