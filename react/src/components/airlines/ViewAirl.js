import React, { useEffect, useState} from 'react'
import Table from "../Layout/Table"
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

const comonscol = [
    { title: "Name", field: "airline_name" , filtering: false},
    { title: "Rating", field: "rating" ,searchable : false, filtering: false},
    { title: "Total Flights", field: "total_flights", searchable : false , filtering: false},
    { title: "Minimun Flight Cost", field: "min_flight_cost", searchable : false , filtering: false}
  ];

  function Dashboard() {

    const email = useLocation().state.email
    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/val")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          {Array.isArray(data) && data.map(group => group.min_flight_cost = "$"+ (group.min_flight_cost))}

          setData(data)
          console.log(data)
          
          // Do your JSON handling here
      } catch(err) {
          console.log(err)
         // It is text, do you text handling here
      }
    })

    },[])

    

    // const email = useLocation().state.email
    // console.log(email)
    return (
      
      <div> <Navbar email={email}/>
        <div className='container' style={{ marginTop: '5%'}}>
      <Table col={comonscol} data={data} heading = "View Airlines" pl = "Airline Name" filter= {false} />
        </div>
        <div align = "center">
        <Link  to ={'/ah/'+email} state={{ email: email }}> <Button className='ac' variant='text'>Back</Button>  
        </Link>
        </div>
      </div>
    )
}

export default Dashboard