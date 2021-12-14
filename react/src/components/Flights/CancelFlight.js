import React, { useEffect, useState} from 'react'
import Table2 from "../Layout/Table2";

const comonscol = [
    { title: "Airline", field: "airline" , searchable : false , 
    lookup: {0:'Delta Airlines', 1:'Southwest Airlines', 2:'United Airlines' ,
    3: 'American Airlines', 4: 'JetBlue Airways', 5: 'Spirit Airlines',6:'WestJet', 7: 'Interjet'} },
    { title: "Number", field: "flight_id",  filtering: false },
    { title: "Date", field: "flight_date", searchable : false , filtering: false },
  ];

function Dashboard() {

    const [data,setData] = useState({})
    const [data1,setData1] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/rf")
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
      <Table2 col={comonscol} data={data} data1={data1} heading = "Cancel Flight" pl = "Flight Number" filter= {true} />

        </div>
    )
}

export default Dashboard
