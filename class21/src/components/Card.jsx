import React from 'react'
import { useDispatch, } from 'react-redux'

const Card = (props) => {
   
    const addToCartHandler = ()=>{
     
    }
    return (
        <>
            <div className="card">
                <img src="" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <p className="card-text"></p>
                        <a href="#" className="" onClick={addToCartHandler}>ADD TO CART</a>
                    </div>
            </div>
        </>
    )
}

export default Card