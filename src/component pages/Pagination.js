import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: '0',
        },
    },
}));

export default function Paginationn() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={3} color="primary"/>
        </div>
    );
}