import React, { useEffect, useState} from 'react'
import Table from "../Customer/Table";

const comonscol = [
    { title: "ID", field: "flight_id" },
    { title: "Airline", field: "airline" },
    { title: "To", field: "destination" },
    { title: "Date", field: "flight_date" },
    { title: "Available seats", field: "num_empty_seats" },
    { title: "Cost Per seat", field: "seat_cost" },
    { title: "Total Spent", field: "total_spent" }
  ];

  function Dashboard() {

    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/val")
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
        <div className='container'>
      <Table col={comonscol} data={data} />

        </div>
    )
}

export default Dashboard