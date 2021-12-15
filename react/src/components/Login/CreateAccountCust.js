import React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box } from '@material-ui/core';
import './CreateAccountOwner.css'
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));


export default function Register(){
    const [value, setValue] = React.useState(0);
    
    const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
        <div> <Navbar email = {null}/>
            <div  align="center" style={{ marginTop: '6%'}}>
            <h2>Register as Customer</h2>
        

                <form className={classes.root} >
                <TextField id="filled-basic" label="First Name" variant="filled" type="text" required/>
                <TextField id="filled-basic" label="Last Name" variant="filled" required/>
                <TextField id="filled-basic" label="Email" variant="filled" type="email" required/>
                <TextField id="filled-basic" label="Password" variant="filled" type="password" required/>
                <TextField id="filled-basic" label="Confirm" variant="filled" type="password"required/>
                <TextField id="filled-basic" label="Phone Number" pattern="[0-9]{10}" variant="filled" type="number" required/>
                <TextField id="filled-basic" label="Card Number" variant="filled" pattern="[0-9]{16}" type="number" required/>
                <TextField 
                id="filled-basic" 
                label="CVV" variant="filled" type="number"  inputProps={{ inputMode: 'numeric', pattern: '[0-9]{3}' }} />
                <TextField id="filled-basic" label="Expiration Date" variant="filled" type="date"/>
                </form>


            <div align = "center">
                <Link to="/customer"><Button className='reg' variant='text'>Back</Button></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='reg' variant = 'text'><b>Create Account</b></Button>  
            </div>
            </div>
            </div>
        

    )
}