import React from 'react'

// below are the different Material UI components that are imported to be used for the table header
import TableSortLabel from '@mui/material/TableSortLabel';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './TableHeader.css';

export default function TableHeader(props) {
    const {OrderBy, orderDirection, handleRequestSort} = props

    const createSortHandler = (property) => (event) => {
        handleRequestSort(event, property);
    }

  return (
    <TableHead>
        <TableRow>
            <TableCell key="name">
                    <TableSortLabel
                        active={OrderBy === "name"}
                        direction={OrderBy === "name" ? orderDirection : "asc"}
                        onClick={createSortHandler("name")}
                    >
                        Planet Name
                    </TableSortLabel>
            </TableCell>
        </TableRow>
    </TableHead>
  )
}
