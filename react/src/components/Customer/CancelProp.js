import React, { useEffect, useState} from 'react'
import Table2 from "../Layout/Tableccp"
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarCust';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';

const comonscol = [
    { title: "Reservation Date", field: "reservation_date" ,searchable : false, filtering: false},
    { title: "Property Name", field: "Property_Name", filtering: false },
    { title: "Owner Email", field: "Owner_Email",searchable : false, filtering: false},
    { title: "Address", field: "Address",searchable : false, filtering: false}
  ];

  function Dashboard() {
    const email = useLocation().state.email    
    const [data,setData] = useState({})
    const [data1,setData1] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/ccp")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          const data1 = Array.isArray(data) && data.filter(group =>  group.Customer === email)
          setData1(data1)
          setData(data)
          console.log(data1)

          
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
      <Table2 col={comonscol} data={data1} heading = "Cancel Property" filter= {false} pl="Name" email = {email}/>

        </div>
        <div align = "center">
        <Link to={'/ch/'+email} state={{ email: email }}>   
        <Button className='ac' variant='text'>Back</Button>  </Link>
        </div>
      </div>
    )   
}

export default Dashboard

