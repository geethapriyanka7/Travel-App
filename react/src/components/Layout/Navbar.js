import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <div>
            
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#2E3B55'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ color: 'white', marginLeft:"15%" }}>
            <b>Travel App</b>
          </Typography>
          <div>
          <Button style={{ color: 'white'}}>Dashboard</Button>           
          <Button style={{ color: 'white'}}>Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>

        </div>
    )
}
