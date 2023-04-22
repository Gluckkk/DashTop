import { Box, useTheme, Typography } from "@mui/material";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInvoices } from "../../data/mockData";

import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },

    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={theme.palette.firstAccentColor.main}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: theme.palette.firstAccentColor.main,
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.secondAccentColor.default,
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.background.default,
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: theme.palette.secondAccentColor.default,
          },
          "& MuiCheckbox-root": {
            color: `${theme.palette.firstAccentColor.main} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
