import React, { useEffect, useState} from 'react'
import Table from "../Layout/Table";
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Button from '@mui/material/Button'

const comonscol = [
    { title: "Customer Name", field: "customer_name" , filtering: false },
    { title: "Average Rating", field: "avg_rating", searchable : false , filtering: false },
    { title: "Location", field: "location", searchable : false , filtering: false },
    { title: "Is owner", field: "is_owner", searchable : false , filtering: false},
    { title: "Total Seats Purchased", field: "total_seats_purchased" , searchable : false , filtering: false}
  ];

function Dashboard() {

    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/vc")
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
          <Table col={comonscol} data={data} heading = "View Customers" pl = "Name" filter= {false} />

        </div>
        <div align = "center">
            <Button className='ac' variant='text'>Back</Button>  
        </div>
      </div>
    )
}

export default Dashboard
