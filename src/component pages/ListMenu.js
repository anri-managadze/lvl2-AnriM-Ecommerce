import React from 'react';
import Collapse from '@material-ui/core/Collapse';
import {Box} from "@material-ui/core";


export default function ListMenu({children,text}) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Box onClick={handleClick}>
                {text}
            </Box>
            <Collapse in={open} > {children} </Collapse>
        </>
    );
}