import React from 'react';
import {Box} from "@material-ui/core";
import Table from "../admin/productpage-component/Table";
import MainLayout from "../layouts/MainLayout";
import AdminSideBar from "../admin/AdminSideBar";
import FormDialog from "../admin/FormDialog";
import {useStyles} from "../admin/productpage-component/ProductPageStyle";
import {Route, Switch} from "react-router-dom";
import {ADMIN, TABLE} from "../Roures";
import {useRouteMatch} from "react-router-dom";


const Productpage = () => {
    const classes=useStyles();

    return (
        <MainLayout>
            <Box display='flex' justifyContent='space-between' >
                <Box className={classes.sidebarside}>
                    <AdminSideBar />

                    <FormDialog />
                </Box>
                <Box margin='0 auto' className={classes.tableside}>
                    <Switch>
                        <Route path={ADMIN + TABLE}>
                            <Table />
                        </Route>
                    </Switch>
                </Box>
            </Box>
        </MainLayout>
    );
};

export default Productpage;