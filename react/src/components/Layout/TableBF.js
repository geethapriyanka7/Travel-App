import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Box from '@mui/material/Box';
import { Button } from "@material-ui/core";
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import {Link, Navigate} from 'react-router-dom'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2),
  
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '300px',
      },
      '& .MuiButtonBase-root': {
        margin: theme.spacing(2),
      },
    },
  }));

const Table2 = props => {

    
    const classes = useStyles();
  const [gridData] = useState({
    data: props.data,
    columns: props.col,
    resolve: () => {},
    updatedAt: new Date()
  });

  const email = props.email

  useEffect(() => {
    gridData.resolve();
    console.log("RESOLVE AT:", gridData.updatedAt);
  }, [gridData]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [rate, setRate] = useState(0);
  const [done, setDone] = useState(null);

  const handleSubmit = e => {
      setSelectedRow(e)
    //   console.log(props.data[e])
      
  };

  const handleDB =(e)=>{
    e.preventDefault()
    // console.log(props.data[selectedRow])
    var myParams ={
        'email': email,
        'flight_num' : props.data[selectedRow]['flight_id'],
        'airline_name': props.data[selectedRow]['airline'],
        'num_seats': rate,
    } 
  
    console.log(myParams)

    if (myParams !== "") {
        axios.post('http://localhost:5000/bf', myParams)
            .then(function(response){
                console.log(response);
                setDone(1)
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });
    }
    
};

if(done !== null) return <Navigate  to ={'/ch/'+email} state={{ email: email }}  />

  return (

    <div>
    <Box
    sx= {{ mt: 8, mx: "auto", width: 1000 }} >
      <MaterialTable
        title={props.heading}
        columns={gridData.columns}
        data={Array.from(props.data)}
        onRowClick={((evt, selectedRow) => handleSubmit(selectedRow.tableData.id))}
        options={{
          pageSize: 5,
          headerStyle: {
            position: "sticky",
            top: "0"
          },
          maxBodyHeight: "400px",
          filtering: false,
          search: false,
          rowStyle: rowData => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
          })
          
        }}

        localization={{
        toolbar: {
          searchPlaceholder: props.pl,
        },
        }}
      
      />
      </Box>
      <div align="center"> 
      {(selectedRow !== null)?
      <div>
          <br></br>
        <form className={classes.root} onSubmit={handleDB}>  
       <TextField
       label="Count"
       variant="filled"
       required
       type="number"
       value={rate}
       onChange={e => setRate(e.target.value)}/>
        <TextField
        disabled
       label="Review"
       variant="filled"
       value= {parseInt(rate)*props.data[selectedRow]['seat_cost']}/>
        <br></br>
      <Button type="submit"
      style={{ background: '#2E3B55', color: "white", width: "10%", marginTop:"2%"}}>
          Book
        </Button> 
        </form></div>: 
        <h1></h1>}
      </div>
      </div> 

  );
};

export default Table2;
