import React from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    footer:{
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#252525',
        color: 'white',
    }
}));

const ThirdBannerFooter = () => {
    const classes=useStyles();
    return (
        <Box className={classes.footer}>
            © 2020 Copyright: MDBootstrap.com
        </Box>
    );
};

export default ThirdBannerFooter;