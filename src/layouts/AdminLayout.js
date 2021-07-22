import React from 'react';
import {Grid} from "@material-ui/core";
import AdminSideBar from "../admin/AdminSideBar";
import MainLayout from "./MainLayout";

const AdminLayout = ({children}) => {
    return (
        <MainLayout>
                <Grid container >
                    <Grid item xs={12} sm={2}>
                        <AdminSideBar />
                    </Grid>
                    <Grid item xs={12} sm={10}>
                        {children}
                    </Grid>
                </Grid>

        </MainLayout>
    )
};

export default AdminLayout;