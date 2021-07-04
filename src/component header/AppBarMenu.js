import React from 'react';
import CustomizedBadges from "./CustomizedBadges";
import {Box} from "@material-ui/core";
import SplitButton from "./SplitButton";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    btnsignup: {
        width: '90px',
        height:'35px',
        border: '1px solid #42AAFF',
        borderRadius: '30px',
        color: '#42AAFF',
        fontSize: '11px',
        fontWeight: 'bold'
    },
    btnall: {
        color: '#808080',
        fontSize: '16px',
        textTransform: 'inherit',
    }
}));

const AppBarMenu = () => {
    const classes = useStyles();
    return (
                <Box display='flex' >
                    <Box><CustomizedBadges /></Box>
                    <Box><SplitButton /></Box>
                    <Box><Button color="inherit" className={classes.btnall}>Shop</Button></Box>
                    <Box><Button color="inherit" className={classes.btnall}>Contact</Button></Box>
                    <Box><Button color="inherit" className={classes.btnall}>Sign in</Button></Box>
                    <Box><Button color='inherit' className={classes.btnsignup}>Sign up</Button></Box>
                </Box>
    );
};

export default AppBarMenu;