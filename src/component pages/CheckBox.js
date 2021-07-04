import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from "@material-ui/core";

const useStyle= makeStyles(()=>({
    label: 'correct',
    correct:
{
    color: '#4F4F4F',
        fontSize: '13px'
}

}))

export default function CheckBox({label,value}) {
    const classes=useStyle();
    return (
            <FormGroup className={classes.text}>
                <FormControlLabel
                    value={value}
                    control={<Checkbox color="primary" />}
                    label={label}
                />
            </FormGroup>
    );
}