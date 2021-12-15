import React, {Component} from 'react'
import Button from '@mui/material/Button'
import '../Customer/CustomerHome.css';
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarCust';
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Test() {
    const email = useLocation().state.email

    var myParams ={
        'email':email
    }

    if (myParams !== "") {
        axios.post('http://localhost:5000/ch', myParams)
            .then(function(response){
                console.log(response);
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });
    }

    return (
        <div> 
            <Navbar email = {email}/>
        <div  align="center" style={{ marginTop: '7%'}}>
            <h1>Customer Home</h1>
        </div>
        
        <div align="center">
        <Link to={'/bf/'+email} state={{ email: email }}>
            <Button className='ki' variant='text'>Book Flight</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/cf/'+email} state={{ email: email }}>
            <Button className='ki' variant='text'>Cancel Flights</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/vf/'+email} state={{ email: email }}>
            <Button className='ki' variant='text'>View Flights</Button></Link>
        </div>
        <div  align="center">
        <Link to={'/vp/'+email} state={{ email: email }}>
             <Button className='ge' variant='text'>View<br></br>Properties</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/rp/'+email} state={{ email: email }}>
            <Button className='ge' variant='text'>Reserve<br></br>Property</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/ccp/'+email} state={{ email: email }}>
            <Button className='ge' variant='text'>Cancel<br></br>Reservation</Button></Link>
        </div>
        <div  align="center">
        <Link to={'/crp/'+email} state={{ email: email }}>
            <Button className='et' variant='text'>Review<br></br>Property</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to={'/inp/'+email} state={{ email: email }}>
            <Button className='et' variant='text'>View<br></br>Reservation</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to={'/cro/'+email} state={{ email: email }}>
            <Button className='et' variant='text'>Rate<br></br>Owner</Button></Link>
        </div>
        </div>
        )
    }