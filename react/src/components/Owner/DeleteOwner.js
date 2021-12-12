import React, {Component} from 'react'
import Button from '@mui/material/Button'
import "../Owner/DeleteOwner.css";


export default function Test() {

    return (
        <div>

        <div  align="center">
            <Button className='button' variant = 'text'>Delete Owner Account</Button>
         </div>
        <div  align="center">
            <Button className='but' variant = 'text'>Are you sure you want to delete your Owner account?</Button>
         </div>
        
        <div align="center">
            <Button className='gig' variant='text'>Yes :(</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='gig' variant='text'>NO :D</Button>
        </div>
        
        </div>
    )

}
