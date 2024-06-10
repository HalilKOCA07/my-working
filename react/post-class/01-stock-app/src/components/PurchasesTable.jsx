import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';

export default function PurchasesTable({purchases, handleOpen}) {
  const getRowId = (row) => row._id
  const columns = [
    { field: 'createdAt', headerName: 'Date:', minwidth: 150, renderCell:({row})=>{return new Date(row.createdAt).toLocaleDateString("tr-TR")}},
    {
      field: 'firmId',
      headerName: 'Firm',
      width: 150,
      editable: true,
      renderCell: ({row}) => row?.firmId.name,
    },
    {
      field: 'brandId',
      headerName: 'Brand',
      width: 150,
      editable: true,
      renderCell: ({row}) => row?.brandId?.name
    },
    {
      field: 'productId',
      headerName: 'Product',
      width: 110,
      editable: true,
      renderCell: ({row}) => row?.productId?.name
    },
    {
      field: 'quantity',
      headerName: 'Quentity',
      width: 160,
      type: "number",
      editable: false,
  
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
      type: "number",
      editable: false,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      width: 160,
      type: "number",
      editable: false,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 160,
      editable: false,
    },
    {
      field:'actions',
      headerName: 'Acitons',
      minWidht:40,
      align:"center",
      renderCell: ({row:{brandId, productId, quantity, price, firmId, _id},}) => {
        return [
          <GridActionsCellItem 
          key={"edit"}
          icon={<EditIcon />}
          label='Edit'
          onClick={() => 
            handleOpen()
          }
          />
        ]
      }
    }

  ];

  const rows = purchases.map((item) => item)


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={purchases}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
