import React from 'react';
import AdminLayout from "../../layouts/AdminLayout";
import {Route, Switch} from "react-router-dom";
import {ADMIN, TABLE} from "../../roures";
import FormDialog from "../../admin/FormDialog";
import Table from "../../admin/productpage-component/Table";


const Productpage = () => {
    return (
        <AdminLayout>
            <Switch>
                <Route path={ADMIN + TABLE}>
                    <FormDialog />
                    <Table />
                </Route>
            </Switch>
        </AdminLayout>
    );
};

export default Productpage;