import React, {Component} from 'react'
import Button from '@mui/material/Button'
import './MainLogin.css'
import TextField from '@mui/material/TextField'
import { Box } from '@material-ui/core';

export default function Test() {

    return (
        <div>

        <div  align="center">
            <Button className='log' variant = 'text'><b>Login</b></Button>
        </div>
        
        <div align="center">
            <Box
                align="center"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="filled-basic" label="Email" variant="filled" />
                <br></br>
                <TextField id="filled-basic" label="Password" variant="filled" />
                <br></br>
            </Box>
        </div>
        <div align = "center">
            <Button className='bb' variant = 'text'><b>Login</b></Button>  
        </div>
        <div  align="center">
            <Button className='no' variant = 'text'><b>Not Signed Up?</b></Button>
        </div>
        <div  align="center">
            <Button className='reg' variant = 'text'><b>Create Account as Owner</b></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='reg' variant='text'><b>Create Account as Customer</b></Button>
        </div>
    
        </div>
        )
    }