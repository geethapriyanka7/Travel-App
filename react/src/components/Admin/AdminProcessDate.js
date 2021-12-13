import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Admin/AdminProcessDate.css'
import TextField from '@mui/material/TextField'
import { Box } from '@material-ui/core';

export default function Test() {

    return (
        <div>

        <div  align="center">
            <Button className='log' variant = 'text'><b>Admin Process Date</b></Button>
        </div>
        
        <div align="center">
            <Button className='ap' variant = 'text'>Set Current System Date:</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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