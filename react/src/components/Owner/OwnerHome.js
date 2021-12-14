import React from 'react'
import Button from '@mui/material/Button';
import './OwnerHome.css';
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';


export default function Test() {

    return (
        <div> <Navbar />

        <div  align="center" style={{ marginTop: '5%'}}>
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