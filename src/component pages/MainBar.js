import React from 'react';
import {Box, Container} from "@material-ui/core";
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Paginationn from "./Pagination";



const MainBar = () => {
    return (
        <Container>
            <Box display='flex' justifyContent='space-between'>
                <Box >
                    <ViewListIcon   />
                    <ViewModuleIcon />
                </Box>
                <Box>
                   <Paginationn />
                </Box>
            </Box>

            <Box display='flex'  justifyContent='space-between'>
                <Box>
                    <ViewListIcon />
                    <ViewModuleIcon />
                </Box>
                <Box>
                    <Paginationn />
                </Box>
            </Box>

        </Container>
    );
};

export default MainBar;