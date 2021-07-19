import React from 'react';
import {useStyles} from "./AdminSideBarStyle";
import {Box} from "@material-ui/core";
import {Link} from "react-router-dom";
import {TABLE} from "../Roures";
import {useRouteMatch} from "react-router-dom";

const AdminSideBar = () => {
    let { url } = useRouteMatch();
    const classes=useStyles();
    return (
        <Box className={classes.sidebar}>
                <Box className={classes.link} component={Link} to={url + TABLE}>Products</Box>
                <Box className={classes.link} component={Link} to='#'>Users</Box>
                <Box className={classes.link} component={Link} to='#'>Categories</Box>

        </Box>
    );
};

export default AdminSideBar;