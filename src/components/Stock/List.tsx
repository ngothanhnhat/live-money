import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name: string, shares: number, price: number) {
    return { name, shares, price, value: price * shares};
}

const rows = [
    createData('AAPL', 100, 1.239),
    createData('GOOG', 100, 2.727),
    createData('SIRI', 100, 1.500),
];
const total = rows.reduce((prev, cur) => {
    return prev + cur.value;
}, 0)

export default function StockList() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Shares</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="right" component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.shares}</TableCell>
                            <TableCell align="right">${row.price}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={3} align="right">Total</TableCell>
                        <TableCell align="right">${Math.round(total)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
