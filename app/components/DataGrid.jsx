'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { set } from 'lodash'

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
  return (
    <Box sx={{ height: 1000, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns.map(col =>
          col.field === "woodPerHour"
            ? { ...col, renderCell: (params) => (canChuck ? params.value : 0) }
            : col
        )}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}