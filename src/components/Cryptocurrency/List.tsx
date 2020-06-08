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
    upCell: {
        color: 'green'
    },
    downCell: {
        color: 'red'
    }
});

function createData(currency: string, price: number, oneHour: number, oneDay: number, sevenDays: number, amount: number) {
    return { currency, price, oneHour, oneDay, sevenDays, amount, value: price * amount};
}

const rows = [
    createData('Ethereum ETH', 202.22, -0.08, 3.41, -5.99, 52),
    createData('Bitcoin BTC', 8789, -0.04, -7.42, -5.99, 1),
    createData('Bitcoin Cash BCH', 226, -0.19, -4.39, 10.64, 3),
];

const total = rows.reduce((prev, cur) => {
    return prev + cur.value;
}, 0)

export default function CryptocurrencyList() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Currency</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">1h %</TableCell>
                        <TableCell align="right">24h %</TableCell>
                        <TableCell align="right">7d %</TableCell>
                        <TableCell align="right">Total amount</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.currency}>
                            <TableCell align="right" component="th" scope="row">
                                {row.currency}
                            </TableCell>
                            <TableCell align="right">${row.price}</TableCell>
                            <TableCell align="right" className={ row.oneHour < 0 ? classes.downCell: classes.upCell }>{row.oneHour}%</TableCell>
                            <TableCell align="right" className={ row.oneDay < 0 ? classes.downCell: classes.upCell }>{row.oneDay}%</TableCell>
                            <TableCell align="right" className={ row.sevenDays < 0 ? classes.downCell: classes.upCell }>{row.sevenDays}%</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow>
                        <TableCell colSpan={6} align="right">Total</TableCell>
                        <TableCell align="right">${Math.round(total)}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
