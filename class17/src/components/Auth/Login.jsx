import React, { useContext, useEffect, useState } from 'react'
import { signInWithEmailAndPassword, auth } from "../../firebase/firebase"
import { successToast, warningToast } from '../Toastify/Toastify'
import { useNavigate } from 'react-router-dom'
import { CartItemsContext } from '../../context/CartItemsContext'
const Login = () => {
    const { getUserDetails, userData } = useContext(CartItemsContext)
    useEffect(() => {
        getUserDetails()
    }, [])
    const navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })

    // values get
    const userDetailsChangeHandler = (e) => {
        const { value, name } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        })

    }

    // submit handler
    const submitHandler = () => {
        // console.log('userDetails:- ', userDetails);
        const { email, password } = userDetails;

        // authentication logic
        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                successToast("User Login successfully❗")
                let currentUserId = userCredential.user.uid
                // setting this to local storage
                localStorage.setItem("user", currentUserId)
                // save this to local storage
                // reset state
                setUserDetails({
                    email: '',
                    password: ''
                })

                // redirect to login page
                navigate("/main")
            })
            .catch((error) => {
                console.log(error.message)
                warningToast(error.message)
            })
    }
    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-8">
                        {
                            userData.userName && <h1>Welcome {userData.userName},</h1>
                        }
                        <div className='form'>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input value={userDetails.email} onChange={userDetailsChangeHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input value={userDetails.password} onChange={userDetailsChangeHandler} type="password" className="form-control" id="exampleInputPassword1" name='password' />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={submitHandler}>Login</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login