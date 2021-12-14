import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box } from '@material-ui/core';
import './CreateAccountOwner.css'
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import {Link} from 'react-router-dom'

export default function Register(){
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div> <Navbar email = {null}/>
            <div  align="center" style={{ marginTop: '6%'}}>
            <h2>Register as Owner</h2>
            </div>
            <Box
                align="center"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="filled-basic" label="First Name" variant="filled" />
                <br></br>
                <TextField id="filled-basic" label="Last Name" variant="filled" />
                <br></br>
                <TextField id="filled-basic" label="Email" variant="filled" />
                <br></br>
                <TextField id="filled-basic" label="Password" variant="filled" />
                <br></br>
                <TextField id="filled-basic" label="Confirm" variant="filled" />
                <br></br>
                <TextField id="filled-basic" label="Phone Number" variant="filled" />
                <br></br>
            </Box>

            <div align = "center">
            <br></br>
                <Link to="/owner"><Button className='reg' variant='text'>Back</Button></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='reg' variant = 'text'><b>Create Account</b></Button>  
            </div>
        </div>
        

    )
}
