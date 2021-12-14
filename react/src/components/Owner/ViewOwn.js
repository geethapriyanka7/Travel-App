import React, { useEffect, useState} from 'react'
import Table from "../Layout/Table";
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

const comonscol = [
    { title: "Owner Name", field: "owner_name" , filtering: false},
    { title: "Average Rating", field: "avg_rating" , searchable : false, filtering: false},
    { title: "Number of Properties Owned", field: "num_properties_owned" , searchable : false, filtering: false},
    { title: "Average Property Rating", field: "avg_property_rating" , searchable : false, filtering: false }
  ];

  function Dashboard() {

    const email = useLocation().state.email
    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/vo")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          {Array.isArray(data) && data.map(group => group.avg_rating === null ? group.avg_rating = 0 : group.avg_rating)}
          {Array.isArray(data) && data.map(group => group.avg_property_rating === null ? group.avg_property_rating = 0 : group.avg_property_rating)}
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
      <div> <Navbar  email={email}/>
        <div className='container' style={{ marginTop: '5%'}}>
      <Table col={comonscol} data={data} heading = "View Owners" pl = "Name" filter= {false} />

        </div>
        <div align = "center">
        <Link  to ={'/ah/'+email} state={{ email: email }}><Button className='ac' variant='text'>Back</Button>  
        </Link>
        </div>
      </div>
    )
}

export default Dashboard