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

interface row {
    property: string,
    address: string,
    mortgage: number,
    owner: number,
    value: number
}

function createData(property: string, address: string, mortgage: number, owner: number): row {
    return { property, address, mortgage, owner, value: mortgage * owner};
}

const rows: row[] = [];

export default function RealEstateList() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Property</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Mortgage %</TableCell>
                        <TableCell align="right">Owner %</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.property}>
                            <TableCell align="right" component="th" scope="row">
                                {row.property}
                            </TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell align="right">${row.mortgage}</TableCell>
                            <TableCell align="right">{row.owner}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={4} align="right">Total</TableCell>
                        <TableCell align="right">$0</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
