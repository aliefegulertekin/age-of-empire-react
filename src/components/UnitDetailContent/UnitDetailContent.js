import React, {useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSelector } from "react-redux";


const UnitDetailContent = () => {
  const [data, setData] = useState();
  // const item = useSelector(state => state.item);

  const dataHandler = (e) => {
    e.preventDefault();
    // console.log(item);
  }

  return (
    <TableContainer className='filtered-data-table-container' component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
          <TableCell className='header-table-cell' >Id</TableCell>
          <TableCell className='header-table-cell' align="right">Name</TableCell>
          <TableCell className='header-table-cell' align="right">Description</TableCell>
          <TableCell className='header-table-cell' align="right">Min. Required Age</TableCell>
          <TableCell className='header-table-cell' align="right">Wood Cost</TableCell>
          <TableCell className='header-table-cell' align="right">Food Cost</TableCell>
          <TableCell className='header-table-cell' align="right">Gold Cost</TableCell>
          <TableCell className='header-table-cell' align="right">Build Time</TableCell>
          <TableCell className='header-table-cell' align="right">Reload Time</TableCell>
          <TableCell className='header-table-cell' align="right">Hit Points</TableCell>
          <TableCell className='header-table-cell' align="right">Attack</TableCell>
          <TableCell className='header-table-cell' align="right">Accuracy</TableCell>


        </TableRow>
      </TableHead>
      <TableBody>
          <TableRow
          className='table-data-row'
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default UnitDetailContent;