import React,{useState} from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Box } from '@material-ui/core';
import './CreateAccountOwner.css'
import { Navigate, useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';
import axios from 'axios';

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
    const classes = useStyles();
    const [fn, setFn] = useState('');
    const [ln, setLn] = useState('');
    const [em, setEm] = useState('');
    const [pass, setPass] = useState('');
    const [p, setP] = useState('');
    const [cc, setCc] = useState('');
    const [cvv, setCvv] = useState('');
    const[exp,setExp]=useState('');
    const[loc,setLoc]=useState('');
    const [done,setDone] = useState(null);

    function handleSubmit(e) { 
        e.preventDefault()
  
        var myParams ={
            'email': em,
            'first_name': fn,
            'last_name': ln,
            'password':pass,
            'phone_number':p,
        }
            
      console.log(myParams)
    
      if (myParams !== "") {
          axios.post('http://localhost:5000/cao', myParams)
              .then(function(response){
                  console.log(response);
                  setDone(response.data)
         //Perform action based on response
          })
          .catch(function(error){
              console.log(error);
         //Perform action based on error
          });
      }
    
    
      };
  
      {if (done === 1) return <Navigate  to ={'/oh/'+em} state={{ email: em }}  />}
      {if (done === 0) return <Navigate  to ={'/'} />}

    return (
         <div> <Navbar email = {null}/>
            <div  align="center" style={{ marginTop: '6%'}}>
            <h2>Register as Owner</h2>
                <form className={classes.root} onSubmit={handleSubmit}>
                <TextField id="filled-basic" label="First Name" variant="filled" type="text" required
                value={fn}
                onChange={e => setFn(e.target.value)} />
                <TextField id="filled-basic" label="Last Name" variant="filled" required
                value={ln}
                onChange={e => setLn(e.target.value)}/>
                <TextField id="filled-basic" label="Email" variant="filled" type="email" required
                value={em}
                onChange={e => setEm(e.target.value)}/>
                <TextField id="filled-basic" label="Password" variant="filled" type="password" required
                value={pass}
                onChange={e => setPass(e.target.value)}/>
            
                <TextField id="filled-basic" label="Phone Number" inputProps={{ pattern:"[0-9]{10}"}} variant="filled" required
                value={p}
                onChange={e => setP(e.target.value)}/>
    
            <div align = "center">
                <Link to="/owner"><Button className='reg' variant='text'>Back</Button></Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button className='reg' variant = 'text'
                type='submit'   ><b>Create Account</b></Button>  
            </div>
            </form>
            </div>
            </div>
        

    )
}
