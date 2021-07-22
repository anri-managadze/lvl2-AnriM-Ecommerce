import React from 'react';
import {Box, Button,  ListItem, makeStyles, OutlinedInput} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '../../../page-component/CheckBox';

import RadioBut from "../../../page-component/RadioBut";
import ContinuousSlider from "../../../page-component/ContinuousSlider";
import ListMenu from "./ListMenu";
import Circle from "../../../page-component/Circle";
import Ratings from "../../../page-component/Ratings";


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
const usaStyle= makeStyles(()=>({
    root: {
        width: '80%',
        height: '40px',
        backgroundColor: 'transparent'
    },
    gutters: {
        fontSize:'13px',
        color: '#6c757d',
        marginTop: '20px',
        padding: '0',
    }
}))

const SideBar = () => {
    const classes=usaStyle();
    return (
        <>
            <Box>
                <Box fontSize='20px' fontWeight='bold' color='#4F4F4F'>Subcategories</Box>
                <ListItemLink className={classes.gutters}>CLOTHING, SHOES, ACCESSORIES</ListItemLink>
                <ListItemLink className={classes.gutters}>DRESSES</ListItemLink>
                <ListItemLink className={classes.gutters}>TOPS, TEES & BLOUSES</ListItemLink>
                <ListItemLink className={classes.gutters}>SWEATERS</ListItemLink>
                <ListItemLink className={classes.gutters}>FASHION HOODIES & SWEATSHIRTS</ListItemLink>
                <ListItemLink className={classes.gutters}>JEANS</ListItemLink>
            </Box>
            <Box>
                <Box fontSize='20px' marginTop='60px' fontWeight='bold' color='#4F4F4F'>Filters</Box>
                <Box minWidth='100%' display='flex' marginTop='25px'>
                    <OutlinedInput id="outlined-basic" placeholder='Search...' variant="outlined" className={classes.root} />
                    <Button  ><SearchIcon /></Button>
                </Box>
            </Box>
            <Box>
                <Box fontSize='16px' marginTop='60px' fontWeight='bold' color='#4F4F4F'>Condition</Box>
                <Box marginTop='15px' ><Checkbox label='NEW' value='new'/></Box>
                <Box ><Checkbox label='USED' value='used'/></Box>
                <Box ><Checkbox label='COLLECTIBLE' value='collectible'/></Box>
                <Box ><Checkbox label='RENEWED' value='renewed'/></Box>
            </Box>
            <Box>
                <Box fontSize='16px' marginTop='60px' fontWeight='bold' color='#4F4F4F'>Avg. Customer Review</Box>
                <Ratings />
            </Box>
            <Box>
                <Box fontSize='16px' marginTop='60px' fontWeight='bold' color='#4F4F4F'>Price</Box>
                <Box marginTop='15px'>
                    <RadioBut />
                </Box>
            </Box>
            <Box display='flex' marginTop='15px' width='70%'>
                <OutlinedInput id="min" placeholder='$ Min' variant="outlined" className={classes.root} />
                <OutlinedInput id="max" placeholder='$ Max' variant="outlined" className={classes.root} />
            </Box>
            <Box fontSize='16px'  marginTop='60px' fontWeight='bold' color='#4F4F4F'>Price
                <Box> <ContinuousSlider /> </Box>
            </Box>
            <Box>
                <Box fontSize='16px' marginTop='60px' fontWeight='bold' color='#4F4F4F'>Size</Box>
                <Box marginTop='15px'><Checkbox label='34' value='34'/></Box>
                <Box ><Checkbox label='36' value='36'/></Box>
                <Box ><Checkbox label='38' value='38'/></Box>
                <Box ><Checkbox label='40' value='40'/></Box>
            </Box>
            <Box width='20%'>
                <ListMenu text={<Box fontSize='16px' marginTop='10px' fontWeight='bold' color='#4F4F4F' borderBottom='1px solid #4F4F4F'>More</Box>}  >
                    <Box marginTop='15px'><Checkbox label='42' value='42'/></Box>
                    <Box ><Checkbox label='44' value='44'/></Box>
                    <Box ><Checkbox label='46' value='46'/></Box>
                    <Box ><Checkbox label='48' value='48'/></Box>
                </ListMenu>
            </Box>
            <Box fontSize='16px' marginTop='60px' fontWeight='bold' color='#4F4F4F'>Color</Box>
            <Box display='flex' flexWrap='wrap' ml='-15px'>
                <Circle bgcolor='#FFFFFF' />
                <Circle bgcolor='#9E9E9E' />
                <Circle bgcolor='#000000' />
                <Circle bgcolor='#4CAF50' />
                <Circle bgcolor='#2196F3' />
                <Circle bgcolor='#9C27B0' />
                <Circle bgcolor='#FFEB3B' />
                <Circle bgcolor='#3F51B5' />
                <Circle bgcolor='#F44336' />
                <Circle bgcolor='#FF9800' />
            </Box>

        </>
    );
};

export default SideBar;