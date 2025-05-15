'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 400,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'woodPerHour',
    headerName: 'Wood Per Hour',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Location',
    type: 'text',
    width: 200,
    editable: true,
  },
];

export default function WoodChuckDataGrid({ data, canChuck }) {

React.useEffect(() => {
  console.log(data);
}, [data]);
  return (
    <Box sx={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns.map(col =>
          col.field === "woodPerHour"
            ? { ...col, renderCell: (params) => (canChuck ? params.value : 0) }
            : col
        )}
        disableRowSelectionOnClick
      />
    </Box>
  );
}