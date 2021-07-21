import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Description from "./Description";
import Information from "./ Information";
import Review from "./Review";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import {DESCRIPTION, INFORMATION, REVIEW, SINGLE} from "../Roures";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
    const useStyles = makeStyles(() => ({
        root: {
            backgroundColor: 'white',
            width: '100%',
            boxShadow: 'none',
        },
        selected: {
            color: "red !important"
        }
    }));

export default function FullWidthTab() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    let { url } = useRouteMatch();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static" color="white" component={Box} boxShadow='none'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Description" {...a11yProps(0)} component={Link} to={url+DESCRIPTION} />
                    <Tab label="Information" {...a11yProps(1)} component={Link} to={url+INFORMATION} />
                    <Tab label="Review" {...a11yProps(2)} component={Link} to={url+REVIEW} />
                </Tabs>
            </AppBar>
            <Switch>
                <Route path={SINGLE+INFORMATION }>
                    <Information />
                </Route>
                <Route path={SINGLE+REVIEW}>
                    <Review />
                </Route>
                <Route path='*'>
                    <Description />
                </Route>
            </Switch>
        </div>
    );
}