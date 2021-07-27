import React, {useEffect, useState} from "react";
import { Box } from "@material-ui/core";
import MainLayout from "../../layouts/MainLayout";
import {Api} from "../../api";

const PrivatePage = () => {
    const [data, setData] = useState({});


    useEffect(() => {
        Api.persPage()
            .then((res) => res.json())
            .then((el) => {

                setData({
                    id: el.id,
                    name: el.name,
                    email:el.email
                })
                console.log(el)
            })
            .catch((err) => {
            })
    }, []);
  return (
    <MainLayout>
      <Box marginTop='200px' fontSize="50px">Welcome</Box>
        <Box >{data.email}</Box>
        <Box >{data.name}</Box>
        <Box >{data.id}</Box>

    </MainLayout>
  );
};

export default PrivatePage;
