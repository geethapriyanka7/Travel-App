import React, { useEffect, useState} from 'react'
import Table2 from "../Layout/TableCf"
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarCust';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';

const comonscol = [
    { title: "Airline", field: "Airline_Name" , searchable : false , filtering: false },
    { title: "Number", field: "Flight_Num",  filtering: false },
    { title: "Date", field: "Flight_Date", searchable : false , filtering: false },
  ];

function Dashboard() {
    const email = useLocation().state.email
    const [data,setData] = useState({})
    const [data1,setData1] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/cf")
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
      <Table2 col={comonscol} data={data}  heading = "Cancel flight" filter= {false} pl='Flight Number' email = {email} />

        </div>
        <div align = "center">
        <Link to={'/ch/'+email} state={{ email: email }}>   
        <Button className='ac' variant='text'>Back</Button>  </Link>
        </div>
      </div>
    )
}

export default Dashboard
