import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../../Styles/UnitsTable/UnitsTable.css';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function createData(id, name, age, description, cost, build_time, hit_points, attack ,accuracy) {
  return { id, name, age, description,cost, build_time, hit_points, attack, accuracy };
}



const UnitsTable = props => {

  const [data, setData] = useState(props.units.map(e=>e));


  const unitElementDetailHandler = (e) => {
  
  }

  const rows = [
    ...props.units.map(e => createData(e.id, e.name ,e.age,e.description,e.cost, e['build_time'], e['hit_points'], e.attack, e.accuracy))
  ];

  return ( 
    <TableContainer className='filtered-data-table-container' component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className='header-table-cell' >Id</TableCell>
            <TableCell className='header-table-cell' align="right">Name</TableCell>
            <TableCell className='header-table-cell' align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
            onClick={()=>unitElementDetailHandler(row)}
            className='table-data-row'
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              component={Link}
              to={'/units/unit-detail'}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

 )
}


export default UnitsTable;