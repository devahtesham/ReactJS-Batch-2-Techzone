import React, { useContext, useState } from 'react'
import { CartItemsContext } from '../../context/CartItems'

const Card = ({product,className}) => {
    const {incrementQuantity} = useContext(CartItemsContext)    // consumer
    

    const {title, price, description, image} = product
    let shortTitle = description.substring(0,26)
    let shortDescription = description.substring(0,100)

    // Add to cart
    const addToCartHandler = ()=>{
        incrementQuantity()
        // getQuantity(itemsQuantity)
    }
    return (
        <>
            <div className={`card ${className}`}>
                <img src={image} className="card-img-top" alt="..." style={{height:'260px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{shortTitle} ...</h5>
                        <p className="card-text">{shortDescription}</p>
                        <div className=' pb-2 pe-2 d-flex align-items-center justify-content-between'>
                            <button className='btn btn-primary' onClick={addToCartHandler}>Add To Cart</button>
                            <h6 className='m-0'>RS {price}</h6>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Card