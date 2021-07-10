import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from "@material-ui/core/styles";
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    label: {
        fontSize: '13px',
        color: '#847592',
    },
    checked: {
        color: '#1266F1!important'
    }
});

export default function RadioButSingle() {
    const classes=useStyles();
    return (
        <RadioGroup >
            <Box display='flex'>
                <FormControlLabel value="small" control={<Radio classes={ {checked: classes.checked }} color="primary" />} label="SMALL" classes={ {
                    label: classes.label,
                }}/>
                <FormControlLabel value="medium" control={<Radio classes={ {checked: classes.checked }} color="primary" />} label="MEDIUM" classes={ {
                    label: classes.label
                }}/>
                <FormControlLabel value="large" control={<Radio classes={ {checked: classes.checked }} color="primary" />} label="LARGE" classes={ {
                    label: classes.label
                }}/>
            </Box>
        </RadioGroup>
    );
}