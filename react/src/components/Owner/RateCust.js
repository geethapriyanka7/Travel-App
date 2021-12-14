import React, { useEffect, useState} from 'react'
import Table from "../Layout/Table";
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Button from '@mui/material/Button'

const comonscol = [
    { title: "Reservation Date", field: "customer_name" , filtering: false },
    { title: "Customer Email", field: "avg_rating", searchable : false , filtering: false },
    { title: "Property Name", field: "location", searchable : false , filtering: false },
    { title: "Address", field: "is_owner", searchable : false , filtering: false}
  ];

function Dashboard() {

    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/orc")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          {Array.isArray(data) && data.map(group => group.avg_rating === null ? group.avg_rating = 0 : group.avg_rating)}
          {Array.isArray(data) && data.map(group => group.is_owner === 0 ? group.is_owner = "No" : group.is_owner = "Yes")}
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
      <div> <Navbar />
        <div className='container'style={{ marginTop: '5%'}}>
          <Table col={comonscol} data={data} heading = "Owners Rate Customers" filter= {false} />

        </div>
        <div align = "center">
            <Button className='ac' variant='text'>Back</Button>  
        </div>
      </div>
    )
}

export default Dashboard
