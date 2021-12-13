import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div >  
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ background: '#2E3B55'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: 'white', marginLeft:"15%" }}>
            <b>Travel App</b>
          </Typography>

          {(props.email !== null) ? 
          <div style={{ color: 'white', marginRight:"15%" }}>
          <Link  to ={'/ah/'+props.email} state={{ email: props.email }}><Button style={{ color: 'white', marginRight:50}}>Dashboard</Button></Link>           
          <Link  to ={'/admins'}><Button style={{ color: 'white'}}>Logout</Button></Link>
          </div> : 
          
          <div style={{ color: 'white', marginRight:"15%" }}>
          <Button style={{ color: 'white', marginRight:50}}>Sign In</Button>           
          <Button style={{ color: 'white'}}>Log In</Button>
          </div>
          }
          
        </Toolbar>
      </AppBar>
    </Box>

        </div>
    )
}
