import React, { useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Navigate } from 'react-router-dom';
import Navbar from '../Layout/Navbar'

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
    // create state variables for each input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data,setData] = useState({})
    const [emerror,setEm] = useState()
    const [passerror,setPas] = useState()
    
    useEffect(() => {
        fetch("http://localhost:5000/admins")
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

    const handleSubmit = e => { 
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

  
    if(passerror === false) return <Navigate  to ={'/ah/'+email} state={{ email: email }}  />

    return (
      <div>
         <Navbar email = {null}/>
        <br></br><br></br> <br></br><br></br><br></br><br></br><br></br>
        <h2 align="center">ADMIN LOGIN</h2>
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
        <div>
          {/* <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button> */}
          <Button type="submit" style={{ background: '#2E3B55', color: "white", width: "80%"}}>
            Log IN
          </Button>
        </div>
        
      </form>
      </div>
    );
  };
  
  export default Form;