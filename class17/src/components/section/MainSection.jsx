import React, { useContext, useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import Loader from "../Loader/Loader"
import { CartItemsContext } from '../../context/CartItemsContext'

const MainSection = () => {
    const { fetchproducts, allproducts, isLoading,getUserDetails, userData } = useContext(CartItemsContext)

    useEffect(() => {
        fetchproducts()
    }, [])

    useEffect(() => {
        getUserDetails()
    }, [])

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='col-12 text-end d-flex justify-content-end'>
                    <div>
                        <h6 className='user-details text-start'>{userData.userName}</h6>
                        <h6 className='user-details text-start'>{userData.email}</h6>
                    </div>
                </div>
                {
                    isLoading ? <Loader /> :
                        allproducts.slice(0, 10).map((product) => (
                            <div key={product.id} className="col-3">
                                <Card product={product} className="mb-4" />
                            </div>
                        )
                        )
                }
            </div>
        </div>
    )
}

export default MainSection