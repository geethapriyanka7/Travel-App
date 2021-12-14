import React, { useEffect, useState} from 'react'
import Table from "../Layout/Table"
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

const comonscol = [
    { title: "ID", field: "ID" , filtering: false },
    { title: "Name", field: "Airport_Name" , searchable : false, filtering: false },
    { title: "Time Zone", field: "Time_Zone" , searchable : false, lookup: {0:'EST', 1:'CST', 2:'PST'}},
    { title: "Address", field: "address" , searchable : false, filtering: false  }
  ];



export default function ViewAp() {
  console.log(useLocation())
  const email = useLocation().state.email

    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/vap")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text)
          var tz = new Set()
          
          {Array.isArray(data) && data.map(group =>  tz.add(group.Time_Zone))}

          tz = [...tz]    
               
          {Array.isArray(data) && data.map(group => group.Time_Zone = tz.indexOf(group.Time_Zone))}
    
          setData(data)

          
          // Do your JSON handling here
      } catch(err) {
          console.log(err)
         // It is text, do you text handling here
      }
    })

    },[])



    return (
        <div> <Navbar email={email} />
        <div className='container' style={{ marginTop: '5%'}}>
      <Table col={comonscol} data={data} heading = "View Airports" pl = "ID" filter= {true} />

        </div>
        <div align = "center">
        <Link  to ={'/ah/'+email} state={{ email: email }}><Button className='ac' variant='text'>Back</Button>  
        </Link>
        </div>

        </div>
    )
}
