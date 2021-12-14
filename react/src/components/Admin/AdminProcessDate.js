import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Admin/AdminProcessDate.css'
import TextField from '@mui/material/TextField'
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { Box } from '@material-ui/core';

export default function Test() {

    return (
        <div> <Navbar />

        <div  align="center" style={{ marginTop: '5%'}}>
        <h1>Admin Process Date</h1>
        </div>
        
        <div align="center" style={{ color:'#2E3B55',marginTop: '7.5%'}}>
            <h2>Set Current System Date:</h2>
            <Box
                align="center"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="filled-basic" label="MM/DD/YYYY" variant="filled" />
            </Box>
        </div>
        <div align = "center">
            <Button className='ac' variant='text'>Back</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ac' variant = 'text'>Set Date</Button>  
        </div>
        </div>
        )
    }