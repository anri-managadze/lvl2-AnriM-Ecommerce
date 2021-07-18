import React from 'react';
import {Box} from "@material-ui/core";
import Table from "../productpage-component/Table";
import MainLayout from "../layouts/MainLayout";
import AdminSideBar from "../productpage-component/AdminSideBar";
import FormDialog from "../productpage-component/FormDialog";
import {useStyles} from "../productpage-component/ProductPageStyle";


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
                    <Table />
                </Box>
            </Box>
        </MainLayout>
    );
};

export default Productpage;