import React from 'react';
import MainLayout from "../layouts/MainLayout";
import cover from '../cover.jpg'

const ListPage = () => {
    return (
        <MainLayout>
            <div style={{ backgroundImage: `url(${cover})`, height: '400px',backgroundPosition: 'center', backgroundSize: 'cover' }}> </div>
        </MainLayout>
    );
};

export default ListPage;