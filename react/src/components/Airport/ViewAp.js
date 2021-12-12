import React, { useEffect, useState} from 'react'
import Table from "../Layout/Table";

const comonscol = [
    { title: "ID", field: "ID" , filtering: false },
    { title: "Name", field: "Airport_Name" , searchable : false, filtering: false },
    { title: "Time Zone", field: "Time_zone" , searchable : false, lookup: {0:'EST', 1:'CST', 2:'PST'}},
    { title: "Address", field: "address" , searchable : false, filtering: false  }
  ];



export default function ViewAp() {

    const [data,setData] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/vap")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text)
          var tz = new Set()

          {Array.isArray(data) && data.map(group =>  tz.add(group.Time_zone))}
          tz = [...tz]          
          {Array.isArray(data) && data.map(group => group.Time_zone = tz.indexOf(group.Time_zone))}
        
          setData(data)

          
          // Do your JSON handling here
      } catch(err) {
          console.log(err)
         // It is text, do you text handling here
      }
    })

    },[])



    return (
        <div>
        <div className='container'>
      <Table col={comonscol} data={data} heading = "View Airports" pl = "ID" filter= {true} />

        </div>

        </div>
    )
}
