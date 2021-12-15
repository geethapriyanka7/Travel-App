import React, { useEffect, useState} from 'react'
import Button from '@mui/material/Button'
import '../Flights/ScheduleFlight.css'
import TextField from '@mui/material/TextField'
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarOwn';
import { Box } from '@material-ui/core'
import './AddProp.css';
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

export default function Test() {

    const email = useLocation().state.email
    const classes = useStyles();

    const [namee, setName] = useState('');
    const [na, setNa] = useState('');
    const [des, setDes] = useState('');
    const [d, setD] = useState('');
    const [street, setStreet] = useState('');
    const [cap, setCap] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    // useEffect(() => {
    //     fetch("http://localhost:5000/admins")
    // .then(response => response.text ())
    // .then(text => {
    //   try {
    //       const data = JSON.parse(text);
    //       setData(data)
    //       console.log(data)
         
          
    //       // Do your JSON handling here
    //   } catch(err) {
    //       console.log(err)
    //      // It is text, do you text handling here
    //   }
    // })

    // },[])


    function handleSubmit(e) { 
        e.preventDefault()
  
  
        // setPas(); setEm();
        // console.log(email, password);
  
        // var em =[];
        // var p =[];
        // var emer, pser;
        // {Array.isArray(data) && data.map(group => em.push(group.Email))};
        // {Array.isArray(data) && data.map(group => p.push(group.Pass))};
  
        // {em.includes(email) ? emer =false: emer =(true)};
        // {emer === false && (p[em.indexOf(email)] === password) === true  ? pser= (false) :pser = (true)};   
        // console.log(emer,pser)
        // setEm(emer)
        // setPas(pser)
      };
  



    return (
        <div> <Navbar email = {email}/>

        <div  align="center" style={{ marginTop: '7%'}}>
            <h1>Owner Add Property</h1>
            <br></br>
        </div>
        <form className={classes.root} onSubmit={handleSubmit}>
        <div align="center">
            <TextField   label="Name" variant="filled"
            type="text"
            required
            value={namee}
            onChange={e => setName(e.target.value)} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField  label="Nearest Airport" variant="filled" inputProps={{ pattern:"[A-Z]{3}"}}
            type="text"
            value={na}
            onChange={e => setNa(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField  label="Description" variant="filled"
            type="text"
            required
            value={des}
            onChange={e => setDes(e.target.value)} />
        </div>
        <div align = "center">
            <TextField  label="Dist To Airport" variant="filled"
            type="number"
            value={d}
            onChange={e => setD(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <TextField  label="Street" variant="filled" 
            type="text"
            required
            value={street}
            onChange={e => setStreet(e.target.value)}
            />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField  label="Capacity" variant="filled"
            type="number"
            required
            value={cap}
            onChange={e => setCap(e.target.value)} />
        </div>
        <div align = "center">
            <TextField  label="City" variant="filled" 
             type="text"
             required
             value={city}
             onChange={e => setCity(e.target.value)}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <TextField  label="State" variant="filled" inputProps = {{ pattern:"[A-Z]{2}"}}
               type="text"
               required
               value={state}
               onChange={e => setState(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <TextField  label="Zip" variant="filled" inputProps={{ pattern:"[0-9]{5}"}}
               required
               value={zip}
               onChange={e => setZip(e.target.value)}/>
        </div>
        <div align = "center">
            {/* <Button className='biu' variant = 'text'>Cancel</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <Button  type="submit"  className='biu' variant = 'text'>Add</Button> 
        </div>
        <div align = "center">
        <Link  to ={'/oh/'+email} state={{ email: email }}> <Button className='bc' variant='text'>Back</Button>  
        </Link>
        </div>
        </form>
        </div>
        )
    }
