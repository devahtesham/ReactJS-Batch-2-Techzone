import React, { useState } from 'react'

const Login = () => {
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
        console.log('userDetails:- ', userDetails);
        const { email, password } = userDetails;

        // authentication logic

        // reset state
        setUserDetails({
            email: '',
            password: ''
        })
    }
    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-lg-8">
                        <div className='form'>
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
        </>
    )
}

export default Login