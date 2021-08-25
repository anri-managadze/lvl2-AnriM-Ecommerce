import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Collapse,
    List,
    ListItem,
    ListItemText,
    TextField
} from "@material-ui/core";
import { ExpandLessSharp, ExpandMore} from "@material-ui/icons";


const CartDiscount = () => {

    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Card component={Box} mt='20px'>
            <CardContent>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItem button onClick={handleClick}>
                        <ListItemText primary="Add a discount code (optional)" />
                        {open ? <ExpandLessSharp /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div"  mt='10px'>
                            <TextField id="outlined-basic"  variant="outlined" size='small' fullWidth='100%' />
                        </List>
                    </Collapse>
                </List>
            </CardContent>
        </Card>
    );
};

export default CartDiscount;