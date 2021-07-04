import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function RadioBut() {
    return (
            <RadioGroup >
                <FormControlLabel value="under25" control={<Radio color="primary" />} label="UNDER $25" />
                <FormControlLabel value="2550" control={<Radio color="primary" />} label="$25 TO $50" />
                <FormControlLabel value="50100" control={<Radio color="primary" />} label="$50 TO $100" />
                <FormControlLabel value="100200" control={<Radio color="primary" />} label="$100 TO $200" />
                <FormControlLabel value="200above" control={<Radio color="primary" />} label="$200 & ABOVE" />
            </RadioGroup>
    );
}