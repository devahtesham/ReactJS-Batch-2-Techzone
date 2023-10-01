import React, { useContext, useEffect } from 'react'
import Card from '../Card/Card'
import { CartItemsContext } from '../../context/CartItemsContext'
import { successToast } from '../Toastify/Toastify';
import { deleteDoc, doc, db } from '../../firebase/firebase';


const CartSection = () => {

    const { cartItems, setCartItems, decrementQuantity } = useContext(CartItemsContext);
    // console.log(cartItems);

    const deleteProductFromDb = async(product) => {
        let filteredItems = cartItems.filter((item) => item.docId === product.docId)
        let objToSend = {
            ...filteredItems[0]
        }
        let { docId } = objToSend
        await deleteDoc(doc(db, "cartItems", docId));
    }

    const productRemoveHandler = (product, index) => {

        // remove element from ui
        let filteredItems = cartItems.filter((item) => item.id !== product.id)
        setCartItems([...filteredItems])

        // remove element from db
        deleteProductFromDb(product)


        decrementQuantity()
        successToast("Remove Successfully 😔")
    }



    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    {
                        cartItems.length < 1 ? <h1 className='text-center'>Empty !</h1> : cartItems.map((product, index) => (
                            <div key={product.id} className='col-3'>
                                <div className={`card`}>
                                    <img src={product.image} className="card-img-top" alt="..." style={{ height: '260px' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title} ...</h5>
                                        <p className="card-text">{product.description}</p>
                                        <div className=' pb-2 pe-2 d-flex align-items-center justify-content-between'>
                                            <button className='btn btn-primary' onClick={() => { productRemoveHandler(product, index) }}>Remove</button>
                                            <h6 className='m-0'>RS {product.price}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CartSection

