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
            <Button className='log' variant = 'text'><b>Admin Home</b></Button>
        </div>
        
        <div align="center">
            <Button className='ad' variant='text'>Schedule<br></br>Flight</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ad' variant='text'>Remove<br></br>Flight</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ad' variant='text'>Process<br></br>Date</Button>
        </div>
        <div  align="center">
        <Button className='ad' variant='text'>View<br></br>Airport</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button className='ad' variant='text'>View<br></br>Airlines</Button>
        </div>
        <div  align="center">
        <Button className='ad' variant='text'>View<br></br>Owners</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ad' variant='text'>View<br></br>Owners</Button>
        </div>
    
        </div>
        )
    }
