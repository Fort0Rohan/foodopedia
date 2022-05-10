import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const Ingredients = (props) => {

    const rows = props.rows;




    return (
        <TableContainer sx={{ 
            maxHeight: 420,
            }}>
            <Table stickyHeader aria-label="sticky table" >
                <TableHead>
                <TableRow>
                    <TableCell sx={{color: '#33C498'}}>Ingredients</TableCell>
                    <TableCell sx={{textAlign:'right',color: '#33C498'}}>Amount</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map( row => <TableRow
                            key={row.ingredient}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.ingredient}
                        </TableCell>
                        <TableCell align="right">
                            {row.amount}
                        </TableCell>
                        </TableRow> )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Ingredients;