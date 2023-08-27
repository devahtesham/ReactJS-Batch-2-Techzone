import React, { useEffect,useState } from 'react'

const MyCompSectionContainer = () => {
    console.log('Comp is rendering');
    const [isRender,setIsRender] = useState(false)
    const [cartItemsHistory,setCartItemsHistory] = useState(false)

    // case 1
    // useEffect(() => {
    //     console.log("UseEffect is calling ");
    // })

    // case 2
    // useEffect(()=>{
    //      console.log("UseEffect is calling ");
    // },[])

    // case3
    useEffect(()=>{
         console.log("useEffect with empty array");
    },[])

    useEffect(()=>{
        console.log("useEffect with dependency array array");
    },[cartItemsHistory])

    return (
        <>
            <div>MyCompSectionContainer</div>
            <button onClick={()=>setIsRender(!isRender)}>click to change state</button>
            <button onClick={()=>{setCartItemsHistory(!cartItemsHistory)}}>Items History</button>
        </>
    )
}

export default MyCompSectionContainer