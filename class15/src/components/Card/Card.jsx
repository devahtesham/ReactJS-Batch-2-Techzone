import React, { useContext, useEffect, useState } from 'react'
import { CartItemsContext } from '../../context/CartItemsContext'
import { warningToast,successToast } from '../Toastify/Toastify'
import { addDoc,db_collection } from '../../firebase/firebase'

const Card = ({product,className}) => {

    const {incrementQuantity,setCartItems,cartItems} = useContext(CartItemsContext)    // consumer
    const {title, price, description, image} = product
    let shortTitle = description.substring(0,26)
    let shortDescription = description.substring(0,100)


    // add product to firebase
    const addProductToDb = async(objToSend)=>{
        const docRef = await addDoc(db_collection,objToSend);
        console.log(docRef);
    }

    // Add to cart
    const addToCartHandler = (product)=>{
        console.log("I am calling ");
        incrementQuantity()
        setCartItems([...cartItems,product])

        // Add to cart on data base
        addProductToDb(product)    

    }

    const buttonHandler = (product)=>{
        let cartProductsIds = cartItems.map((prod)=> prod.id)

        if (cartProductsIds.includes(product.id)){
        //    alert("Product already Added !")
            warningToast("Product already Added ❗")
        }else{
            addToCartHandler(product)
            successToast("Product added Successfully 😊")
        }
    }
    return (
        <>
            <div className={`card ${className}`}>
                <img src={image} className="card-img-top" alt="..." style={{height:'260px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{shortTitle} ...</h5>
                        <p className="card-text">{shortDescription}</p>
                        <div className=' pb-2 pe-2 d-flex align-items-center justify-content-between'>
                            <button className='btn btn-primary' onClick={()=>{
                                buttonHandler(product)
                            }}>{
                                cartItems.map((prod)=> prod.id ).includes(product.id) ? "Product Added" : "Add to Cart"
                            }</button>
                            <h6 className='m-0'>RS {price}</h6>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Card