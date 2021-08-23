import React from "react";
import AdminLayout from "../../layouts/AdminLayout";
import { Route, Switch } from "react-router-dom";
import { ADMIN, TABLE } from "../../roures";
import Modal from "../../component/Modal";
import Table from "../../admin/productpage-component/Table";
import AddProductForm from "../../admin/AddProductForm";


const Productpage = () => {
  return (
    <AdminLayout>
      <Switch>
        <Route path={ADMIN + TABLE}>
            <Modal title='Add Your Product ' btntitle='Add Product' margin='110px 0 0 30px'>
                <AddProductForm />
            </Modal>
          <Table />
        </Route>
      </Switch>
    </AdminLayout>
  );
};

export default Productpage;
