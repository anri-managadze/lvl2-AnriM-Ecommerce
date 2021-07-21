
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {Box, Container, Hidden} from "@material-ui/core";
import AppBarMenu from "./AppBarMenu";
import ListMenu from "../page-component/ListMenu";
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import {LIST} from "../Roures";
import {useStyles} from "./HeaderAppBarStyle";

export default function HeaderAppBar() {
    const classes = useStyles();
    return (
            <Container className={classes.header }>
                <AppBar position="static"  component={Box} color='inherit' bgcolor='white' display='flex' flexDirection='row' justifyContent='space-between' padding='10px 50px 0 50px'>
                            <Link to={LIST} className={classes.list}>
                            <Box >
                                <Typography variant="h6"  >
                                    MDB
                                </Typography>
                            </Box>
                            </Link>
                            <Box >
                                <Hidden xsDown >
                                    <AppBarMenu display={'flex'} justifyContent={'flex-end'} />
                                </Hidden>
                                <Hidden smUp>
                                    <ListMenu text={<MenuIcon className={classes.icon} />} flexDirection={'row-reverse'} width={'250px'} justifyContent={'space-between'} display={'flex'}>
                                        <AppBarMenu display={'column'} textAlign={'center'} />
                                    </ListMenu>
                                </Hidden>
                            </Box>
                </AppBar>
        </Container>

    );
}