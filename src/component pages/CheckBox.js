import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


export default function CheckBox() {
    return (
        <FormControl component="fieldset">
            <FormGroup >
                <FormControlLabel
                    value="new"
                    control={<Checkbox color="primary" />}
                    label="NEW"
                    labelPlacement="new"
                />
                <FormControlLabel
                    value="used"
                    control={<Checkbox color="primary" />}
                    label="USED"
                    labelPlacement="used"
                />
                <FormControlLabel
                    value="collectible"
                    control={<Checkbox color="primary" />}
                    label="COLLECTIBLE"
                    labelPlacement="collectible"
                />
                <FormControlLabel
                    value="renewed"
                    control={<Checkbox color="primary" />}
                    label="RENEWED"
                    labelPlacement="renewed"
                />
            </FormGroup>
        </FormControl>
    );
}