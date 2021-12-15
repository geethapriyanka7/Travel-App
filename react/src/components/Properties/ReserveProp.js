import React, { useEffect, useState} from 'react'
import Table2 from "../Layout/Tablerp"
import { useLocation } from 'react-router-dom';
import Navbar from '../Layout/NavbarCust';
import Button from '@mui/material/Button'
import {Link} from 'react-router-dom';

const comonscol = [
    { title: "Property Name", field: "property_name",  searchable : false, filtering: false },
    { title: "Owner Email", field: "owner_email", searchable : false , filtering: false },
    { title: "Capacity", field: "capacity", searchable : false , filtering: false },
  ];

function Dashboard() {
    const email = useLocation().state.email
    const [data,setData] = useState({})
    const[time,setTime]=useState()

    useEffect(() => {
        fetch("http://localhost:5000/rp")
    .then(response => response.text ())
    .then(text => {
      try {
          let data = JSON.parse(text);
          setTime(data[0]['time'])
          data = data.filter((group=> !group.time))
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
      <div>  <Navbar email = {email}/>
        <div className='container'style={{ marginTop: '5%'}}>
      <Table2 col={comonscol} data={data} heading ={"Reserve Property ---- "+(time)} filter= {false} email={email} />

        </div>
        <div align = "center">
        <Link to={'/ch/'+email} state={{ email: email }}>   
        <Button className='ac' variant='text'>Back</Button>  </Link>
        </div>
      </div>
    ) 
}

export default Dashboard
