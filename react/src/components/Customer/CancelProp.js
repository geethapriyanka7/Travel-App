import React, { useEffect, useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';

const comonscol = [
    { title: "Reservation Date", field: "ID" ,searchable : false, filtering: false},
    { title: "Property Name", field: "property_name",searchable : false, filtering: false },
    { title: "Owner Email", field: "owner_email",searchable : false, filtering: false},
    { title: "Address", field: "To_Airport",searchable : false, filtering: false}
  ];
