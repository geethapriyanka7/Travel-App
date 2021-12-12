import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import Box from '@mui/material/Box';

const Table = props => {
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


  return (

    <div>
    <Box
    sx= {{ mt: 8, mx: "auto", width: 700 }} >
      <MaterialTable
        title="View Customers"
        columns={gridData.columns}
        data={Array.from(props.data)}
        options={{
          pageSize: 5,
          fontFamily: "Montserrat",
          headerStyle: {
            position: "sticky",
            top: "0"
          },
          maxBodyHeight: "400px"
        }}
      
      />
      </Box>
      </div> 

  );
};

export default Table;
