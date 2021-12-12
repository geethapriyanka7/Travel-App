import React from 'react'
import Button from '@mui/material/Button';
import './OwnerHome.css';


export default function Test() {

    return (
        <body>

        <div  align="center">
            <Button className='bun' variant = 'text'>Welcome, Owner!</Button>
         </div>
        <div align="center">
            <Button className='gug' variant='text'>Add Property</Button>
        </div>
        <div align="center">
            <Button className='big' variant='text'>Remove Property</Button>
        </div>
        </body>
    )

}