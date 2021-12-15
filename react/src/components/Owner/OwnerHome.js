import React,{ useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import './OwnerHome.css';
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarOwn';
import {Link} from 'react-router-dom'


export default function Test() {
    const email = useLocation().state.email

    return (
        <div> 
            <Navbar email = {email}/>
        <div  align="center" style={{ marginTop: '7%'}}>
            <h1>Welcome, Owner!</h1>
         </div>
        <div align="center">
        <Link to={'/ap/'+email} state={{ email: email }}><Button className='gug' variant='text'>Add Property</Button>
            </Link><br></br>
            <Link to={'/orp/'+email} state={{ email: email }}><Button className='gug' variant='text'>Remove Property</Button>
            </Link>
            
        </div>
        <div align="center">
        <Link to={'/orc/'+email} state={{ email: email }}> <Button className='big' variant='text'>Rate Customer</Button></Link>
        <Link to={'/do/'+email} state={{ email: email }}> <Button className='big' variant='text'>Delete Account</Button></Link>
        </div>
        </div>
    )

}