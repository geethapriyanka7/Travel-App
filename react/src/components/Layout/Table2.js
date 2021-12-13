import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Box from '@mui/material/Box';
import { Button } from "@material-ui/core";
import axios from 'axios';

const Table2 = props => {
  const [gridData] = useState({
    data: props.data,
    columns: props.col,
    resolve: () => {},
    updatedAt: new Date()
  });

  useEffect(() => {
    gridData.resolve();
    console.log("RESOLVE AT:", gridData.updatedAt);
  }, [gridData]);

  const [selectedRow, setSelectedRow] = useState(null);

  const handleSubmit = e => {
      setSelectedRow(e)
    //   console.log(props.data1[e])
      
  };

  const handleDB =()=>{
    console.log(props.data1[selectedRow])
    var myParams = props.data1[selectedRow]

    if (myParams !== "") {
        axios.post('http://localhost:5000/rf', myParams)
            .then(function(response){
                console.log(response);
       //Perform action based on response
        })
        .catch(function(error){
            console.log(error);
       //Perform action based on error
        });
    }
    
};


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
          filtering: props.filter,
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
      <Button type="submit" onClick={() => { handleDB() }} style={{ background: '#2E3B55', color: "white", width: "10%", marginTop:"2%"}}>Remove</Button>: <h1></h1>}
      </div>
      </div> 

  );
};

export default Table2;
