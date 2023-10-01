import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword, doc, setDoc,db } from "../../firebase/firebase"
import { successToast, warningToast } from '../Toastify/Toastify'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate()

    const [userDetails, setUserDetails] = useState({
        userName: '',
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
        if (!userDetails.userName || !userDetails.email || !userDetails.password) {
            warningToast("Required Fields are missing ");
            return
        }
        const { userName, email, password } = userDetails;

        // authentication logic
        createUserWithEmailAndPassword(auth, email, password)
            .then(async(userCredential) => {
                successToast("User Added successfully❗")
                let currentUserId = userCredential.user.uid

                // setting this to local storage
                localStorage.setItem("user",currentUserId)
                console.log(currentUserId)

                // add user in users collection
                await setDoc(doc(db, "users", currentUserId), {
                    userName,
                    email
                });

                // reset state
                setUserDetails({
                    userName: '',
                    email: '',
                    password: ''
                })

                // redirect to login page
                navigate("/login")
            })
            .catch((error) => {
                console.log(error.message)
                warningToast(error.message)
            })



    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-8">
                    <div className='form'>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Name:- </label>
                            <input value={userDetails.userName} onChange={userDetailsChangeHandler} type="text" className="form-control" id="name" aria-describedby="emailHelp" name='userName' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input value={userDetails.email} onChange={userDetailsChangeHandler} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input value={userDetails.password} onChange={userDetailsChangeHandler} type="password" className="form-control" id="exampleInputPassword1" name='password' />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={submitHandler}>Register</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup