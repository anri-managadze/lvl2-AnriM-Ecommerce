import React from 'react';
import {useStyles} from "./AdminSideBarStyle";
import {Box} from "@material-ui/core";
import {Link} from "react-router-dom";
import {TABLE} from "../roures";
import {useRouteMatch} from "react-router-dom";
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Category';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const AdminSideBar = () => {
    let { url } = useRouteMatch();
    const classes=useStyles();
    return (
        <Box className={classes.sidebar}>
                <Link className={classes.link}  to={url + TABLE}><Box><BusinessCenterIcon/></Box><Box marginLeft='15px'>Products</Box></Link>
                <Link className={classes.link}  to='#'><Box><PeopleIcon/></Box><Box marginLeft='15px'>Users</Box></Link>
                <Link className={classes.link}  to='#'><Box><CategoryIcon/></Box><Box marginLeft='15px'>Categories</Box></Link>

        </Box>
    );
};

export default AdminSideBar;