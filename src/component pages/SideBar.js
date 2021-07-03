import React from 'react';
import {Box, Button,  ListItem, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from './CheckBox';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import RadioBut from "./RadioBut";
import ContinuousSlider from "./ContinuousSlider";


function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

const SideBar = () => {
    return (
        <>
            <Box fontSize='20px'>Subcategories
                <Box fontSize='13px' color='#6c757d' marginTop='20px'><ListItemLink>CLOTHING, SHOES, ACCESSORIES</ListItemLink></Box>
                <Box fontSize='13px' color='#6c757d' marginTop='20px'><ListItemLink>DRESSES</ListItemLink></Box>
                <Box fontSize='13px' color='#6c757d' marginTop='20px'><ListItemLink>TOPS, TEES & BLOUSES</ListItemLink></Box>
                <Box fontSize='13px' color='#6c757d' marginTop='20px'><ListItemLink>SWEATERS</ListItemLink></Box>
                <Box fontSize='13px' color='#6c757d' marginTop='20px'><ListItemLink>FASHION HOODIES & SWEATSHIRTS</ListItemLink></Box>
                <Box fontSize='13px' color='#6c757d' marginTop='20px'><ListItemLink>JEANS</ListItemLink></Box>
            </Box>
            <Box fontSize='20px' marginTop='60px'>Filters
                <Box>
                    <TextField
                    id="outlined-size-normal"
                    variant="outlined"
                />
                    <Button color="primary"><SearchIcon /></Button>
                </Box>
            </Box>
            <Box fontSize='20px' marginTop='60px'>Condition
                <Box><Checkbox /></Box>
            </Box>
            <Box fontSize='20px' marginTop='60px'>Avg. Customer Review
                <Box><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><span>&UP</span></Box>
                <Box><StarIcon /><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /><span>&UP</span></Box>
                <Box><StarIcon /><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><span>&UP</span></Box>
                <Box><StarIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><StarBorderIcon /><span>&UP</span></Box>
            </Box>
            <Box fontSize='20px' marginTop='60px'>Price
               <Box><RadioBut /> </Box>
            </Box>
            <Box display='flex'>
                <TextField
                    name="maxNodeSelectedCount"
                    component={TextField}
                    label="Max Node Selected Count"
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                />
                <TextField
                    name="maxNodeSelectedCount"
                    component={TextField}
                    label="Max Node Selected Count"
                    type="number"
                    InputProps={{ inputProps: { min: 0, max: 10 } }}
                />
            </Box>
            <Box fontSize='20px'  marginTop='60px'>Price
                <Box> <ContinuousSlider /> </Box>
            </Box>
        </>
    );
};

export default SideBar;