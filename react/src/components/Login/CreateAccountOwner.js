import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box } from '@material-ui/core';
import './CreateAccountOwner.css'

export default function Register(){
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div>
            <div  align="center">
            <Button className='log' variant = 'text'><b>Register as Owner</b></Button>
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
            <Button className='bb' variant = 'text'><b>Create Account</b></Button>  
            </div>
        </div>
        

    )
}
