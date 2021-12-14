import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Customer/CustomerHome.css';
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarCust';
import {Link} from 'react-router-dom'

export default function Test() {
    const email = useLocation().state.email
    return (
        <div> 
            <Navbar email = {email}/>
        <div  align="center" style={{ marginTop: '7%'}}>
            <h1>Customer Home</h1>
        </div>
        
        <div align="center">
            <Button className='ki' variant='text'>Book Flight</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ki' variant='text'>Cancel Flights</Button>
        </div>
        <div  align="center">
        <Link to={'/vp/'+email} state={{ email: email }}>
             <Button className='ge' variant='text'>View<br></br>Properties</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ge' variant='text'>Reserve<br></br>Property</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ge' variant='text'>Cancel<br></br>Reservation</Button>
        </div>
        <div  align="center">
            <Button className='et' variant='text'>Review<br></br>Property</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/inp/'+email} state={{ email: email }}>
            <Button className='et' variant='text'>View<br></br>Reservation</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='et' variant='text'>Rate<br></br>Owner</Button>
        </div>
        </div>
        )
    }