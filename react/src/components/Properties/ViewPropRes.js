import React, { useEffect, useState} from 'react'
import Tablevpr from "../Layout/Tablevpr";
import Navbar from '../Layout/NavbarCust';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const comonscol = [
    { title: "Property Name", field: "Property_Name",searchable : false, filtering: false },
    { title: "Start Date", field: "Start_Date" ,searchable : false, filtering: false},
    { title: "End Date", field: "End_Date" ,searchable : false, filtering: false},
    { title: "Cust. Phone#", field: "Customer_Phone_num" ,searchable : false, filtering: false},
    { title: "Customer", field: "Customer_Email",searchable : false, filtering: false},
    { title: "Cost", field: "Total_Booking_Cost",searchable : false, filtering: false},
    { title: "Review", field: "Review",searchable : false, filtering: false},
    { title: "Rating", field: "Rating_Score",searchable : false, filtering: false}
  ];

  function Dashboard() {
    const email = useLocation().state.email
    const [data,setData] = useState({})
    const [data1,setData1] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/vpr")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          const data1 = JSON.parse(text);
          setData1(data1)
          // var tz = new Set()
          
          // {Array.isArray(data) && data.map(group =>  tz.add(group.airline))}

          // tz = [...tz]    
        
          // {Array.isArray(data) && data.map(group => group.airline = tz.indexOf(group.airline))}
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
        <div className='container'><Navbar email = {email}/>
        <br></br>
      <Tablevpr col={comonscol} data={data} data1={data1} heading = "View Property Reservation" filter= {false} />
      
      <div align = "center">
      <Link to={'/ch/'+email} state={{ email: email }}>   
        <Button className='ac' variant='text'>Back</Button>  </Link>
        </div>
        </div>
    )
}

export default Dashboard