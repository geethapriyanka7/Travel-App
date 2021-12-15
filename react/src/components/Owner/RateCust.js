import React, { useEffect, useState} from 'react'
import Table from "../Layout/TableRate";
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarOwn';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'

const comonscol = [
    { title: "Reservation Date", field: "Reservation_Date" , filtering: false },
    { title: "Customer Email", field: "Customer_Email", searchable : false , filtering: false },
    { title: "Property Name", field: "Property_Name", searchable : false , filtering: false },
    { title: "Address", field: "Address", searchable : false , filtering: false}
  ];

function Dashboard() {

    const [data,setData] = useState({})
    const email = useLocation().state.email
    useEffect(() => {
        fetch("http://localhost:5000/orc")
    .then(response => response.text ())
    .then(text => {
      try {
          var data = JSON.parse(text);
          data = Array.isArray(data) && data.filter(group => group.owner_email === email)
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
      <div> <Navbar email = {email} />
        <div className='container'style={{ marginTop: '7%'}}>
          <Table col={comonscol} data={data} heading = "Owners Rate Customers" email = {email}/>

        </div>
        <div align = "center">
        <Link  to ={'/oh/'+email} state={{ email: email }}>    <Button className='ac' variant='text'>Back</Button>  
        </Link></div>
      </div>
    )
}

export default Dashboard
