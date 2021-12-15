import React, { useEffect, useState} from 'react'
import Button from '@mui/material/Button'
import '../Flights/ScheduleFlight.css'
import TextField from '@mui/material/TextField'
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import {Link, Navigate} from 'react-router-dom'
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


export default function Test() {
    const email = useLocation().state.email
    const classes = useStyles();
    console.log(email)
    
    const [num, setNum] = useState('');
    const [date, setDate] = useState('');
    const [air, setAir] = useState('');
    const [cost, setCost] = useState(0);
    const [airport, setAirport] = useState('');
    const [toAir, setToAir] = useState('');
    const [dep, setDep] = useState('');
    const[time,setTime]=useState('');
    const[arr,setArr] = useState('');
    const[cap,setCap]=useState('');
    const [done,setDone] = useState(null);


    useEffect(() => {
        fetch("http://localhost:5000/sf")
    .then(response => response.text ())
    .then(text => {
      try {
          setTime(text)
          
          // Do your JSON handling here
      } catch(err) {
          console.log(err)
         // It is text, do you text handling here
      }
    })

    },[])


    function handleSubmit(e) { 
        e.preventDefault()
        var myParams ={
            'flight_num': num,
            'airline_name': air,
            'from_airport': airport,
            'departure_time':dep,
            'arrival_time':arr,
            'flight_date':date,
            'cost': cost,
            'capacity': cap,
            'to_airport':toAir,
        }
            
      console.log(myParams)
    
      if (myParams !== "") {
          axios.post('http://localhost:5000/sf', myParams)
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

      if(done !== null) return <Navigate  to ={'/ah/'+email} state={{ email: email }}  />
      
    return (
        <div> <Navbar email={email} />

        <div  align="center" style={{ marginTop: '7.5%'}}>
            <h1>Schedule Flight</h1>
            <br></br>
        </div>
        <form className={classes.root} onSubmit={handleSubmit}>
        <div align="center">
            <TextField id="filled-basic" label="Flight Number" variant="filled" 
            type="number"
            required
            value={num}
            onChange={e => setNum(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField required id="filled-basic" variant="filled" type="date"
            value={date}
            onChange={e => setDate(e.target.value)} />
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="Airline" variant="filled" 
            value={air}
            required
            onChange={e => setAir(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField required id="filled-basic" label="$ Per Person" variant="filled" type='number'
            value={cost}
            onChange={e => setCost(e.target.value)} />
        </div>
        <div align = "center">
            <TextField required id="filled-basic" label="From Airport" variant="filled" 
            inputProps={{ pattern:"[A-Z]{3}"}}
            value={airport}
            required
            onChange={e => setAirport(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField 
            required id="filled-basic" label="Capacity" variant="filled"
            onChange={e => setCap(e.target.value)}
            value={cap} />
        </div>
        <div align = "center">
            <TextField required id="filled-basic" label="To Airport" variant="filled" 
            inputProps={{ pattern:"[A-Z]{3}"}}
            value={toAir}
           required
            onChange={e => setToAir(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <TextField disabled id="filled-basic" label="Current Date" variant="filled" value={time}/>
        </div>
        <div align = "center">
            <TextField id="filled-basic" label="Departure Time" variant="filled" 
            value={dep}
            required
            inputProps = {{pattern:"[0-9]{6}"}}
            onChange={e => setDep(e.target.value)}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            
            <TextField  required 
             id="filled-basic" label="Arrival Time" variant="filled" 
             inputProps = {{pattern:"[0-9]{6}"}}
            onChange={e => setArr(e.target.value)}
            value={arr} />
            <br></br>
        </div>
        <div align = "center">
            <Button  type="submit"  className='biu' variant = 'text'>Add</Button> 
        </div> <br></br><br></br> <br></br>
        <div align = "center">
        <Link to={'/ah/'+email} state={{ email: email }}>
            <Button className='ac' variant='text'
            onClick={() => { handleSubmit() }} >Back</Button></Link> 
          
        </div>
        </form>
        </div>
        )
    }



