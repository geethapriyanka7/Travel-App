import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Admin/AdminHome.css';

export default function Test() {

    return (
        <div>

        <div  align="center">
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