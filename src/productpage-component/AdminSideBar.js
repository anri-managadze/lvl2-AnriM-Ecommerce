import React from 'react';
import {useStyles} from "./AdminSideBarStyle";
import {Box} from "@material-ui/core";
import {Link} from "react-router-dom";


const AdminSideBar = () => {
    const classes=useStyles();
    return (
        <Box className={classes.sidebar}>
                <Box className={classes.link} component={Link} to='#'>Products</Box>
                <Box className={classes.link} component={Link} to='#'>Users</Box>
                <Box className={classes.link} component={Link} to='#'>Categories</Box>

        </Box>
    );
};

export default AdminSideBar;