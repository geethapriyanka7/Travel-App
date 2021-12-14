import React, { useEffect, useState} from 'react'
import Table2 from "../Layout/Table2"
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarCust';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';

const comonscol = [
    { title: "Property Name", field: "property_name",  searchable : false, filtering: false },
    { title: "Owner Email", field: "owner_email", searchable : false , filtering: false },
    { title: "Capacity", field: "capacity", searchable : false , filtering: false },
  ];

function Dashboard() {
    const email = useLocation().state.email
    const [data,setData] = useState({})
    const [data1,setData1] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/rp")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          const data1 = JSON.parse(text);
          setData1(data1)
          var tz = new Set()
          
          {Array.isArray(data) && data.map(group =>  tz.add(group.airline))}

          tz = [...tz]    
        
          {Array.isArray(data) && data.map(group => group.airline = tz.indexOf(group.airline))}
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
      <Table2 col={comonscol} data={data} heading = "Reserve Property" filter= {false} />

        </div>
        <div align = "center">
        <Link to={'/ch/'+email} state={{ email: email }}>   
        <Button className='ac' variant='text'>Back</Button>  </Link>
        </div>
      </div>
    ) 
}

export default Dashboard
