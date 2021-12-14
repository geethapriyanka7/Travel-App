import React, { useEffect, useState} from 'react'
import Table from "../Layout/Table";
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarCust';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'


const comonscol = [
    { title: "Name", field: "property_name" ,searchable : false, filtering: false},
    { title: "Address", field: "address" ,searchable : false, filtering: false},
    { title: "Description", field: "description", searchable : false , filtering: false},
    { title: "Avg. Rating", field: "average_rating_score", searchable : false , filtering: false},
    { title: "Capacity", field: "capacity",filtering: false},
    { title: "Cost", field: "cost_per_night", searchable : false , filtering: false}
  ];

  function Dashboard() {
    const email = useLocation().state.email
    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/vp")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          {Array.isArray(data) && data.map(group => group.cost_per_night = "$"+ (group.cost_per_night))}
          {Array.isArray(data) && data.map(group => group.average_rating_score === null ? group.average_rating_score = 0  :group.average_rating_score )}

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
      <Table col={comonscol} data={data} heading = "View Properties" pl = "Capacity" filter= {false} />

        </div>
        <div align = "center">
        <Link to={'/ch/'+email} state={{ email: email }}>   
        <Button className='ac' variant='text'>Back</Button>  </Link>
        </div>
      </div>
    )
}

export default Dashboard