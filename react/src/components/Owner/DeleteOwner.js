import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button'
import "../Owner/DeleteOwner.css";
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarOwn';
import axios from 'axios';
import {Link, Navigate} from 'react-router-dom'



export default function Test() {
    const email = useLocation().state.email
    const [done, setDone] = useState(null);


    const handleDB =()=>{
        var myParams = {
            "email": email
        }
    
        if (myParams !== "") {
            axios.post('http://localhost:5000/do', myParams)
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

    if(done !== null) return <Navigate  to ={'/'}  />

    return (
        <div> <Navbar email = {email}/>

        <div  align="center" style={{ marginTop: '5%'}}>
            <h1>Delete Owner Account</h1>
        </div>
        <div  align="center" style={{ marginTop: '7%'}}>
            <h2>Are you sure you want to delete your Owner account?</h2>
            <Button onClick={() => { handleDB() }} className='gig' variant='text'>Yes :(</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={'/oh/'+email} state={{ email: email }}> <Button className='gig' variant='text'>NO :D</Button></Link>
        </div>
        </div>
    )

}
