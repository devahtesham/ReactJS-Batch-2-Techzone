import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import Loader from "../Loader/Loader"

const MainSection = () => {
    let [allproducts, setAllProducts] = useState([]);
    let [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchproducts()
    }, [])

    const fetchproducts = async () => {
        setIsLoading(true)
        axios.get("https://fakestoreapi.com/products/")
            .then((response) => {
                setIsLoading(false)
                setAllProducts(response.data)
            })
            .catch((err) => {
                setIsLoading(false)
                console.log(err);
            })
    }

    // const getQuantity = (quantity)=>{
    //     console.log(quantity);
    // }
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