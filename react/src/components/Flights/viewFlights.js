import React, { useEffect, useState} from 'react'
import Table from "../Layout/Table";
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/Navbar';
import Button from '@mui/material/Button'

const comonscol = [
    { title: "ID", field: "ID" ,searchable : false, filtering: false},
    { title: "Airline", field: "Airlines",searchable : false, filtering: false },
    { title: "From", field: "From_Airport",searchable : false, filtering: false},
    { title: "To", field: "To_Airport",searchable : false, filtering: false},
    { title: "Dept. Time", field: "Dept_Time",searchable : false, filtering: false },
    { title: "Arr. Time", field: "Arr_Time",searchable : false, filtering: false },
    { title: "Date", field: "Date",searchable : false, filtering: false },
    { title: "Available seats", field: "Available_Seats", filtering: false },
    { title: "Cost Per seat", field: "Cost_Per_Seat",searchable : false, filtering: false },
    { title: "Total Spent", field: "Total_Spent",searchable : false, filtering: false }
  ];

  function Dashboard() {

    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/vf")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
        //   {Array.isArray(data) && data.map(group => group.avg_rating === null ? group.avg_rating = 0 : group.avg_rating)}
        //   {Array.isArray(data) && data.map(group => group.avg_property_rating === null ? group.avg_property_rating = 0 : group.avg_property_rating)}
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
        <div className='container' style={{ marginTop: '5%'}}>
      <Table col={comonscol} data={data} heading = "View Flights" pl = "Available Seats" filter = {false}/>

        </div>
        <div align = "center">
            <Button className='ac' variant='text'>Back</Button>  
        </div>
      </div>
    )
}

export default Dashboard