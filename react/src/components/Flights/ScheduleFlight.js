import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Flights/ScheduleFlight.css'
import TextField from '@mui/material/TextField'
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { Box } from '@material-ui/core';

export default function Test() {

    return (
        <div> <Navbar />

        <div  align="center" style={{ marginTop: '7.5%'}}>
            <h1>Schedule Flight</h1>
        </div>
        
        <div align="center">
            <TextField id="filled-basic" label="Flight Number" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Flight Date" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="Airline" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="$ Per Person" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="From Airport" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Capacity" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="To Airport" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Current Date" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="Departure Time" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Arrival Time" variant="filled" />
        </div>
        <div align = "center">
            <Button className='ac' variant='text'>Back</Button>  
        </div>
        </div>
        )
    }



