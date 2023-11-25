import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../store/Actions/Product';

const Card = (props) => {
    const dispatch = useDispatch();
    const {image,title,description,price} = props.product
    const addToCartHandler = ()=>{
        dispatch(addToCart(props.product))
    }
    return (
        <>
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{price}</p>
                        <a href="#" className="btn btn-primary" onClick={addToCartHandler}>ADD TO CART</a>
                    </div>
            </div>
        </>
    )
}

export default Card