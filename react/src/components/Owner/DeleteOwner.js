import React, {Component} from 'react'
import Button from '@mui/material/Button'
import "../Owner/DeleteOwner.css";
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';


export default function Test() {

    return (
        <div> <Navbar />

        <div  align="center" style={{ marginTop: '5%'}}>
            <h1>Delete Owner Account</h1>
        </div>
        <div  align="center" style={{ marginTop: '7%'}}>
            <h2>Are you sure you want to delete your Owner account?</h2>
            <Button className='gig' variant='text'>Yes :(</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='gig' variant='text'>NO :D</Button>
        </div>
        <div align = "center" style={{ marginTop: '7.5%'}}>
            <Button className='ac' variant='text'>Back</Button>  
        </div>
        </div>
    )

}
