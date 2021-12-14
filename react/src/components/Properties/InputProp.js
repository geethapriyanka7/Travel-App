import React, { useEffect, useState} from 'react'
import NavbarCust from '../Layout/NavbarCust'
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button'
import {Link, Navigate} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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


export default function InputProp() {
    const classes = useStyles();
    const email = useLocation().state.email
    const [oemail, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [done, setDone] = useState(null);



    function handleSubmit(e) { 
        e.preventDefault()
        console.log(oemail, password);
        var myParams = {
            'property_name' : password,
            'owner_email': oemail,
        }

        if (myParams !== "") {
            axios.post('http://localhost:5000/vpr', myParams)
                .then(function(response){
                    console.log(response);
                    setDone(1)
           //Perform action based on response
            })
            .catch(function(error){
                console.log(error);
           //Perform action based on error
            });
        }
      };


      if(done !== null) return <Navigate  to ={'/vpr/'+email} state={{ email: email }}  />
      
    return (
        <div>
            <NavbarCust  email = {email} />
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Owner Email"
          variant="filled"
          type="email"
          required
          value={oemail}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Property"
          variant="filled"
          type="text"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>

          <Button type="submit" style={{ background: '#2E3B55', color: "white", width: "80%"}}>
            Next
          </Button>
        </div>
        
      </form>

            <div align = "center">
      <Link to={'/ch/'+email} state={{ email: email }}>   
        <Button className='ac' variant='text'>Back</Button>  </Link>
        </div>
 


        </div>
    )
}
