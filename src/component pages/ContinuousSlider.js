import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        width: 200,
    },
});

export default function ContinuousSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className={classes.root}  display='flex' >
                <Box marginTop='15px' fontSize='15px'> $0 </Box>
                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                <Box marginTop='15px' fontSize='15px'> $100 </Box>
        </Box>
    );
}