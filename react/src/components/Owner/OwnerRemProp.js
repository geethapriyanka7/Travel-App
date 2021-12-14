import React, { useEffect, useState} from 'react'
import Tableorp from "../Layout/Tableorp";
import Navbar from '../Layout/NavbarOwn';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom'


const comonscol = [
    { title: "Property Name", field: "Property_Name", filtering: false },
    { title: "Description", field: "Descr" ,searchable : false, filtering: false},
    { title: "Capacity", field: "Capacity" ,searchable : false, filtering: false},
    { title: "Cost", field: "Cost" ,searchable : false, filtering: false},
    { title: "Address", field: "Address" ,searchable : false, filtering: false}
  ];

  function Dashboard() {

    const email = useLocation().state.email
    const [data,setData] = useState({})
    const [data1,setData1] = useState({})

    useEffect(() => {
        fetch("http://localhost:5000/orp")
    .then(response => response.text ())
    .then(text => {
      try {
          const data = JSON.parse(text);
          const data1 = Array.isArray(data) && data.filter(group =>  group.Owner_Email === email)
          setData1(data1)
          setData(data)
          console.log(data1)
          
          // Do your JSON handling here
      } catch(err) {
          console.log(err)
         // It is text, do you text handling here
      }
    })

    },[])

    

    
    return (
      <div>
      <Navbar email = {email}/>

        <div className='container' style={{marginTop:"7%"}}>
      <Tableorp col={comonscol} data={data1} heading = "Owner Remove Property" filter= {false} pl="Name" />
        </div>
        <div align = "center">
        <Link  to ={'/oh/'+email} state={{ email: email }}> <Button className='ac' variant='text'>Back</Button>  
        </Link>
        </div>
        </div>
    )
}

export default Dashboard