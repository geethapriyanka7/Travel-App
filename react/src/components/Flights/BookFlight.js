import React, { useEffect, useState} from 'react'
import Table2 from "../Layout/TableBF"
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarCust';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';

const comonscol = [
    { title: "Airline", field: "airline" , searchable : false , filtering: false },
    { title: "Flight Num", field: "flight_id",  searchable : false, filtering: false },
    { title: "Available Seats", field: "num_empty_seats", searchable : false , filtering: false },
  ];

function Dashboard() {
    const email = useLocation().state.email
    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/bf")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          setData(data)
          console.log(data)
          
          // Do your JSON handling here
      } catch(err) {
          console.log(err)
         // It is text, do you text handling here
      }
    })

    },[])

    

    
    return (
      <div>  <Navbar email = {email}/>
        <div className='container'style={{ marginTop: '5%'}}>
      <Table2 col={comonscol} data={data} heading = "Book Flight" filter= {false} email={email} />

        </div>
        <div align = "center">
        <Link to={'/ch/'+email} state={{ email: email }}>   
        <Button className='ac' variant='text'>Back</Button>  </Link>
        </div>
      </div>
    )
}

export default Dashboard
