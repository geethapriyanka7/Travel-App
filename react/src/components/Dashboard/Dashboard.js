import { Button } from '@material-ui/core';
import React from 'react'
import Navbar from '../Layout/Navbar';
import {Link} from 'react-router-dom'

export default function Dashboard() {
    return (
        <div>
            <Navbar email = {null}/>
            <div align="center" style={{marginTop:"10%"}}>
            <h2>LOGIN</h2>
            <h2>AS</h2>
            </div>
            <br></br><br></br>
            <div align="center" style={{marginLeft:"0%"}}>
            <Link  to ={'/admins'}><Button variant="outlined" size="large" style={{background: '#2E3B55', color:"white"}}>ADMIN</Button></Link>
            <Link  to ={'/l'}><Button variant="outlined" size="large" style={{marginLeft:"5%", background: '#2E3B55', color:"white"}} >CLIENT</Button></Link>
            </div>
            <br></br><br></br><br></br><br></br>
            {/* <div align="center">
                Not Signed Up? <br></br> <br></br>
                <Button variant="outlined" size="medium" style={{background: '#2E3B55', color:"white"}}>REGISTER</Button>
            </div> */}
        


        </div>
    )
}
