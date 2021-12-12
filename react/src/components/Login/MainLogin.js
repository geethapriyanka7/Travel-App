import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Login/MainLogin.css';

export default function Test() {

    return (
        <div>

        <div  align="center">
            <Button className='log' variant = 'text'><b>Login</b></Button>
        </div>
        
        <div align="center">
            <Button className='ad' variant='text'>Admin</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ad' variant='text'>Client</Button>
        </div>
        <div  align="center">
            <Button className='no' variant = 'text'><b>Not Signed Up?</b></Button>
        </div>
        <div  align="center">
            <Button className='reg' variant = 'text'><b>Create Account</b></Button>
        </div>
    
        </div>
        )
    }