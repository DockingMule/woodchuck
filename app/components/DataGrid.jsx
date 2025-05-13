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

const woodChucks = [
  {
    id: 1,
    firstName: "Punxsutawney Phil",
    lastName: "Seer of Seers",
    age: 139,
    woodPerHour: 12,
    location: "Gobbler's Knob"
  },
  {
    id: 2,
    firstName: "Chucky",
    lastName: "Woodson",
    age: 4,
    woodPerHour: 10,
    location: "Maple Hollow"
  },
  {
    id: 3,
    firstName: "Hazel",
    lastName: "Burrower",
    age: 3,
    woodPerHour: 9,
    location: "Oak Ridge"
  },
  {
    id: 4,
    firstName: "Woody",
    lastName: "McChuck",
    age: 5,
    woodPerHour: 11,
    location: "Pine Grove"
  },
  {
    id: 5,
    firstName: "Gracie",
    lastName: "Grounder",
    age: 6,
    woodPerHour: 8,
    location: "Elm Valley"
  },
  {
    id: 6,
    firstName: "Buck",
    lastName: "Stumper",
    age: 2,
    woodPerHour: 7,
    location: "Cedar Creek"
  },
  {
    id: 7,
    firstName: "Mabel",
    lastName: "Tunnel",
    age: 4,
    woodPerHour: 10,
    location: "Willow Bend"
  },
  {
    id: 8,
    firstName: "Chuck",
    lastName: "Beaverly",
    age: 3,
    woodPerHour: 9,
    location: "Birch Woods"
  },
  {
    id: 9,
    firstName: "Gus",
    lastName: "Gnawer",
    age: 5,
    woodPerHour: 10,
    location: "Spruce Hill"
  },
  {
    id: 10,
    firstName: "Daisy",
    lastName: "Digger",
    age: 2,
    woodPerHour: 6,
    location: "Aspen Glade"
  }
];

export default function WoodChuckDataGrid({ canChuck }) {
  let rows = woodChucks;
  return (
    <Box sx={{ height: 1000, width: '100%' }}>
      <DataGrid
        rows={rows}
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