import React, { useEffect, useState} from 'react'
import Table2 from "../Layout/Table2";

const comonscol = [
    { title: "Reservation Date", field: "reservation_date" ,searchable : false, filtering: false},
    { title: "Owner Email", field: "Owner_Email",searchable : false, filtering: false},
    { title: "Property Name", field: "Property_Name",searchable : false, filtering: false },
    { title: "Address", field: "Address",searchable : false, filtering: false}
  ];

  function Dashboard() {

    const [data,setData] = useState({})
    const [data1,setData1] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/crp")
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
      <Table2 col={comonscol} data={data} data1={data1} heading = "Customer Rate Owner" filter= {false} />

        </div>
    )
}

export default Dashboard