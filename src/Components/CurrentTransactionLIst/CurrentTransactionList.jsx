
import React from 'react';
import { TransactionList } from "./CurrentTransactionList.style";
import "./CurrentTransactionList.scss";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
  
  
const rows = [
  {
    id: 1,
    name: "Mustapha Seidu",
    gender: "Male",
    amount: 2000,
    hotelName: "Millar",
    "transaction id": "#390239482309903"
  },
  {
    id: 2,
    name: "Abigail Mills",
    gender: "Female",
    amount: 2500,
    hotelName: "Rosa park",
    "transaction id": "#390239482309903"
  },
  {
    id: 3,
    name: "Seidu Munira",
    gender: "Female",
    amount: 1300,
    hotelName: "Millar",
    "transaction id": "#390239482309903"
  },
  {
    id: 4,
    name: "Mustapha Seidu",
    gender: "male",
    amount: 2000,
    hotelName: "Millar",
    "transaction id": "#390239482309903"
  },
  {
    id: 5,
    name: "Mustapha Seidu",
    gender: "male",
    amount: 2000,
    hotelName: "Millar",
    "transaction id": "#390239482309903"
  },
  {
    id: 6,
    name: "Mustapha Seidu",
    gender: "male",
    amount: 2000,
    hotelName: "Millar",
    "transaction id": "#390239482309903"
  },
];

const CurrentTransactionList = () => {

  return (
    <TransactionList>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="tableHeader">
            <TableRow>
              <TableCell className="table_cell">Transaction ID</TableCell>
              <TableCell className="table_cell" align="right">Amount (Gh&cent;)</TableCell>
              <TableCell className="table_cell" align="right">Name</TableCell>
              <TableCell className="table_cell" align="right">Gender</TableCell>
              <TableCell className="table_cell" align="right">Hotel Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.length && rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">{row['transaction id']}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.hotelName}</TableCell> 
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TransactionList>
  );
}

export default React.memo(CurrentTransactionList);
