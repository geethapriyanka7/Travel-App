import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Flights/ScheduleFlight.css'
import TextField from '@mui/material/TextField'
import { Box } from '@material-ui/core'
import './AddProp.css';

export default function Test() {

    return (
        <div>

        <div  align="center">
            <Button className='log' variant = 'text'><b>Owner Add Property</b></Button>
        </div>
        
        <div align="center">
            <TextField id="filled-basic" label="Name" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Nearest Airport" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="Description" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Dist To Airport" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="Street" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="Capacity" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="City" variant="filled" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField id="filled-basic" label="State" variant="filled" />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="Zip" variant="filled" />
        </div>
        <div align = "center">
            <Button className='biu' variant = 'text'>Cancel</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='biu' variant = 'text'>Add</Button> 
        </div>
        </div>
        )
    }
