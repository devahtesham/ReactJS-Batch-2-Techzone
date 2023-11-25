import React from 'react'
import "./SignUpForm.css"
import InputBox from '../../MUI/InputBox'
import { Box, Typography } from '@mui/material'
import PasswordField from '../../MUI/PasswordField'

const SignUpForm = () => {
    return (
        <Box className='sigup-form mt-5'>
            <div className='form-header text-center'>
                <Typography variant='h3' component={'span'}>Sign in</Typography>
                {/* <h3 className='m-0 py-2'></h3> */}
                <h3 className='py-2 m-0 fw-400'>Use your Google Account</h3>
            </div>
            <div className=''>
                <InputBox label={"Name"} type="text"/>
                <InputBox label={"Email"} type="email"/>
                <PasswordField />
                
            </div>

        </Box>
    )
}

export default SignUpForm