import React, { useEffect, useState} from 'react'
import Table from "./Table";

const comonscol = [
    { title: "Customer Name", field: "customer_name" },
    { title: "Average Rating", field: "avg_rating" },
    { title: "Location", field: "location" },
    { title: "Is owner", field: "is_owner" },
    { title: "Total Seats Purchased", field: "total_seats_purchased" }
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
        <div className='container'>
      <Table col={comonscol} data={data} />

        </div>
    )
}

export default Dashboard
