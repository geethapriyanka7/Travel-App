import React, { useEffect, useState} from 'react'
import Table from "../Customer/Table";

const comonscol = [
    { title: "Name", field: "airline_name" },
    { title: "Rating", field: "rating" },
    { title: "Total Flights", field: "total_flights" },
    { title: "Minimun Flight Cost", field: "min_flight_cost" }
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