import React from 'react'
import Button from '@mui/material/Button';
import './OwnerHome.css';
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarOwn';


export default function Test() {
    const email = useLocation().state.email

    return (
        <div> 
            <Navbar email = {email}/>
        <div  align="center" style={{ marginTop: '7%'}}>
            <h1>Welcome, Owner!</h1>
         </div>
        <div align="center">
            <Button className='gug' variant='text'>Add Property</Button>
        </div>
        <div align="center">
            <Button className='big' variant='text'>Remove Property</Button>
        </div>
        </div>
    )

}