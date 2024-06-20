import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import useStockRequest from "../services/useStockRequest";
import { red } from "@mui/material/colors";
import { btnStyle } from "../styles/globalStyles";

export default function SalesTable({ sales, handleOpen, setInfo }) {
  const {deleteStock} = useStockRequest()
  const getRowId = (row) => row._id;
  const columns = [
    {
      field: "createdAt",
      headerName: "Date:",

      renderCell: ({ row }) => {
        return new Date(row.createdAt).toLocaleDateString("tr-TR");
      },
    },
    {
      field: "brandId",
      headerName: "Brand",

      editable: true,
      renderCell: ({ row }) => row?.brandId?.name,

    },
    {
      field: "productId",
      headerName: "Product",

      editable: true,
      renderCell: ({ row }) => row?.productId?.name,
    },
    {
      field: "quantity",
      headerName: "Quentity",

      type: "number",
      editable: false,
    },
    {
      field: "price",
      headerName: "Price",

      type: "number",
      editable: false,
    },
    {
      field: "amount",
      headerName: "Amount",

      type: "number",
      editable: false,
    },
    {
      field: "actions",
      headerName: "Acitons",
      backgroundColor:red,
      renderCell: ({
        row: { brandId, productId, quantity, price, firmId, _id },
      }) => {
        return [
          <GridActionsCellItem
            key={"edit"}
            icon={<EditIcon />}
            label="Edit"
            sx={btnStyle}
            onClick={() => {
              handleOpen();
              setInfo({ brandId, productId, quantity, price, firmId, _id });
            }}
          />,
          <GridActionsCellItem 
          key={"remove"}
          icon={<DeleteIcon />}
          label="Remove"
          onClick={() => deleteStock("sales", _id)}
          sx={btnStyle}
          />
        ];
      },
    },
  ];

  return (
    <Box sx={{ width: "100%", mt:4 }}>
      <DataGrid
        rows={sales}
        sx={{backgroundColor:red}}
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
