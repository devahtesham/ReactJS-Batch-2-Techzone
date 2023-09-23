import React, { useContext } from 'react'
import Card from '../Card/Card'
import { CartItemsContext } from '../../context/CartItemsContext'

const CartSection = () => {

    const { cartItems } = useContext(CartItemsContext);
    console.log('cartItems', cartItems);
    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    {
                        cartItems.length < 1 ? <h1 className='text-center'>Empty !</h1> : cartItems.map((product) => (
                            <div key={product.id} className='col-3'>
                                <Card product={product} className="mb-4" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CartSection

