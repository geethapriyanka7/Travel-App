import React, {Component, useEffect, useState} from 'react'
import Button from '@mui/material/Button'
import './MainLogin.css'
import TextField from '@mui/material/TextField'
import { Box } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import {Link} from 'react-router-dom'
import {Navigate } from 'react-router-dom';
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

  const Form = ({ handleClose }) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data,setData] = useState({})
    const [emerror,setEm] = useState()
    const [passerror,setPas] = useState()
    
    useEffect(() => {
        fetch("http://localhost:5000/customer")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          setData(data)
          console.log(data)
         
          
          // Do your JSON handling here
      } catch(err) {
          console.log(err)
         // It is text, do you text handling here
      }
    })

    },[])


    function handleSubmit(e) { 
      e.preventDefault()
      setPas(); setEm();
      console.log(email, password);

      var em =[];
      var p =[];
      var emer, pser;
      {Array.isArray(data) && data.map(group => em.push(group.Email))};
      {Array.isArray(data) && data.map(group => p.push(group.Pass))};

      {em.includes(email) ? emer =false: emer =(true)};
      {emer === false && (p[em.indexOf(email)] === password) === true  ? pser= (false) :pser = (true)};   
      console.log(emer,pser)
      setEm(emer)
      setPas(pser)
    };
  
    if(passerror === false) return <Navigate  to ={'/ch/'+email} state={{ email: email }}  />



    return (
        <div> <Navbar email = {null}/>

        <div  align="center" style={{ marginTop: '7%'}}>
            <h1><b>Customer Login</b></h1>
        </div>
        <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div>
          {emerror === true ? <h4 style={{color:"red"}}>Invalid Email</h4> : 
          passerror === true ? <h4 style={{color:"red"}}>Invalid Password</h4>:
          <h2></h2> }
          
        </div>
        <div align = "center">
        <Button type="submit" style={{ background: '#2E3B55', color: "white", width: "80%"}}>
            Log IN
          </Button>
        </div>
        </form>
        <div  align="center" style={{marginTop:"5%"}}>
            <h3><b>Not Signed Up?</b></h3>
        </div>
        <div  align="center">
            {/* <Link to="/cao"><Button className='reg' variant = 'text'>Create Account as Owner</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <Link to="/cac"><Button className='reg' variant='text'>Create Account as Customer</Button></Link>
        </div>
    
        </div>
        );
    };

export default Form;