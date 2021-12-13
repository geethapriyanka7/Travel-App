import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Customer/CustomerHome.css';

export default function Test() {

    return (
        <div>

        <div  align="center">
            <Button className='log' variant = 'text'><b>Customer Home</b></Button>
        </div>
        
        <div align="center">
            <Button className='ad' variant='text'>Book Flight</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ad' variant='text'>Cancel Flights</Button>
        </div>
        <div  align="center">
            <Button className='ad' variant='text'>View<br></br>Properties</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ad' variant='text'>Reserve<br></br>Property</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ad' variant='text'>Cancel<br></br>Reservation</Button>
        </div>
        <div  align="center">
            <Button className='ad' variant='text'>Review<br></br>Property</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ad' variant='text'>View<br></br>Reservation</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ad' variant='text'>Rate Owner</Button>
        </div>
        </div>
        )
    }