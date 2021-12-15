import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button'
import '../Admin/AdminProcessDate.css'
import TextField from '@mui/material/TextField'
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import { Box } from '@material-ui/core';
import {Link, Navigate} from 'react-router-dom'
import axios from 'axios';

export default function Test() {
    const email = useLocation().state.email
    const [date,setDate] = useState('');
    console.log(email)
    const [done, setDone] = useState(null);

    const handleDB =()=>{

        var myParams = {
            'date':date
        }

        console.log(myParams)
        if (myParams !== "") {
            axios.post('http://localhost:5000/apd', myParams)
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

        <div  align="center" style={{ marginTop: '5%'}}>
        <h1>Admin Process Date</h1>
        </div>
        
        <div align="center" style={{ color:'#2E3B55',marginTop: '7.5%'}}>
            <h2>Set Current System Date:</h2>
            <Box
                align="center"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="filled-basic"  type="date" variant="filled" 
                onChange={e => setDate(e.target.value)}/>
            </Box>
        </div>
        <div align = "center">
        <Link to={'/ah/'+email} state={{ email: email }}>
            <Button className='ac' variant='text'>Back</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='ac' variant = 'text' onClick={() => { handleDB() }} >Set Date</Button>  
        </div>
        </div>
        )
    }