import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Admin/AdminHome.css';
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';

export default function AdminHome () {
    const email = useLocation().state.email
    console.log(email)
    
    return (
       
        <div>
        <Navbar email = {email}/>
        <div  align="center" style={{ marginTop: '5%'}}>
            <h1>Admin Home</h1>
        </div>
        
        <div align="center">
            <Button className='ki' variant='text'>Schedule<br></br>Flight</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ki' variant='text'>Remove<br></br>Flight</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ki' variant='text'>Process<br></br>Date</Button>
        </div>
        <div  align="center">
        <Button className='ki' variant='text'>View<br></br>Airport</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className='ki' variant='text'>View<br></br>Airlines</Button>
        </div>
        <div  align="center">
        <Button className='ki' variant='text'>View<br></br>Customers</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ki' variant='text'>View<br></br>Owners</Button>
        </div>
    
        </div>
        )
    }
