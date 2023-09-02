import React,{useState} from "react"

const Counter = ()=>{
    let [counter,setCounter] = useState(0)

    const increementCounterhandler = ()=>{
        setCounter(++counter)
    }
    const decrementCounterhandler = ()=>{
        if(counter > 0){
            setCounter(--counter)
        }
    }

    return <div className="container">
        <h1 className="text-center">Counter App</h1>
        <div className="row justify-content-center">
            <div className="col-5">
                <div className="screen mt-5 text-center" style={{fontSize:50}}>{counter}</div>
                <div className="buttons d-flex justify-content-center gap-3 mt-3">
                    <button className="btn btn-primary" onClick={increementCounterhandler}>+</button>
                    <button className="btn btn-warning" onClick={decrementCounterhandler}>-</button>
                </div>
            </div>
        </div>
    </div>
}

export default Counter