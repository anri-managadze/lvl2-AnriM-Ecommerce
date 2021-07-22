import React, {useState} from 'react';
import {Box, makeStyles} from "@material-ui/core";

const useStyle=makeStyles({
    btn: {
        width: '50px',
        height: '35px',
        textAlign: 'center',
        border: '1px solid #E4E4E4',
        borderRadius: '3px',
        backgroundColor: 'white',
        fontSize: '20px'
    }
})

const Quantity = () => {
    const classes=useStyle();
    const [count, setCount] = useState(0);
    return (
        <>
            <Box display='flex' mt='15px'>
                <button onClick={() => setCount(count - 1)} className={classes.btn}>-</button>
                <button className={classes.btn} >{count} </button>
                <button onClick={() => setCount(count + 1)} className={classes.btn}>+</button>
            </Box>
        </>
    );
};

export default Quantity;