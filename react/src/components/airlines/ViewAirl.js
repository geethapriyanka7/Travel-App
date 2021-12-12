import React, { useEffect, useState} from 'react'
import Table from "../Layout/Table";

const comonscol = [
    { title: "Name", field: "airline_name" , filtering: false},
    { title: "Rating", field: "rating" ,searchable : false, filtering: false},
    { title: "Total Flights", field: "total_flights", searchable : false , filtering: false},
    { title: "Minimun Flight Cost", field: "min_flight_cost", searchable : false , filtering: false}
  ];

  function Dashboard() {

    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/val")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          {Array.isArray(data) && data.map(group => group.min_flight_cost = "$"+ (group.min_flight_cost))}

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
      <Table col={comonscol} data={data} heading = "View Airlines" pl = "Airline Name" filter= {false} />

        </div>
    )
}

export default Dashboard