import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Flights/ScheduleFlight.css'
import TextField from '@mui/material/TextField'
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarOwn';
import { Box } from '@material-ui/core'
import './AddProp.css';
import {Link} from 'react-router-dom'


export default function Test() {

    const email = useLocation().state.email

    return (
        <div> <Navbar email = {email}/>

        <div  align="center" style={{ marginTop: '7%'}}>
            <h1>Owner Add Property</h1>
            <br></br>
        </div>
        <div align="center">
            <TextField id="filled-basic" label="Name" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Nearest Airport" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Description" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="Dist To Airport" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Street" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Capacity" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="City" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="State" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Zip" variant="filled" />
        </div>
        <div align = "center">
            <Button className='biu' variant = 'text'>Cancel</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='biu' variant = 'text'>Add</Button> 
        </div>
        <div align = "center">
        <Link  to ={'/oh/'+email} state={{ email: email }}> <Button className='bc' variant='text'>Back</Button>  
        </Link>
        </div>
        </div>
        )
    }
