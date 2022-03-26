import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: 'red',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const months=['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
const rows = [
  createData(months[(new Date().getMonth() +1)].toString(),'500$' ),
  createData(months[(new Date().getMonth() +1)].toString(),'500$' ),
  createData(months[(new Date().getMonth() +1)].toString(),'500$' ),
  createData(months[(new Date().getMonth() +1)].toString(),'500$' ),
  createData(months[(new Date().getMonth() +1)].toString(),'500$' ),
  
  
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function PaymentTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
