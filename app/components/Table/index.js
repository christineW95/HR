import * as React from 'react';
import Table from '@material-ui/material/Table';
import TableBody from '@material-ui/material/TableBody';
import TableCell from '@material-ui/material/TableCell';
import TableContainer from '@material-ui/material/TableContainer';
import TableHead from '@material-ui/material/TableHead';
import TableRow from '@material-ui/material/TableRow';
import Paper from '@material-ui/material/Paper';

function createData(name, value,) {
    return { name, value, };
}

const rows = [
    createData('Annual Leave', 28),
    createData('Unpaid Vacations', 0),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Leave Type</TableCell>
                        <TableCell align="right">Leave Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
