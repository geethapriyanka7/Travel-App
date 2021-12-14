import React, { useEffect, useState} from 'react'
import Table2 from "../Layout/Table2";

const comonscol = [
    { title: "Property Name", field: "Property_Name",searchable : false, filtering: false },
    { title: "Start Date", field: "Start_date" ,searchable : false, filtering: false},
    { title: "End Date", field: "End_date" ,searchable : false, filtering: false},
    { title: "Cust. Phone#", field: "Customer_phone_num" ,searchable : false, filtering: false},
    { title: "Customer", field: "Customer_Email",searchable : false, filtering: false},
    { title: "Cost", field: "Table_Booking_Cost",searchable : false, filtering: false},
    { title: "Review", field: "Review",searchable : false, filtering: false},
    { title: "Rating", field: "Rating_Score",searchable : false, filtering: false}
  ];

  function Dashboard() {

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
          var tz = new Set()
          
          {Array.isArray(data) && data.map(group =>  tz.add(group.airline))}

          tz = [...tz]    
        
          {Array.isArray(data) && data.map(group => group.airline = tz.indexOf(group.airline))}
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
      <Table2 col={comonscol} data={data} data1={data1} heading = "View Property Reservation" filter= {false} />

        </div>
    )
}

export default Dashboard