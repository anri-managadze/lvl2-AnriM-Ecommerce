import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {setLogedIn, setUser} from "../../store/user/userActionsCreator";
import {HOME, PRIVATE} from "../../roures";
import {Link, useHistory} from "react-router-dom";
import {selectUser} from "../../store/user/userSelector";
import {Box} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    image : {
        width: '30px',
        height: '30px',
        borderRadius: '50%'
    },
    link : {
        textDecoration: "none",
        color: "#808080",
    }
}));

export default function ProfButton() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const history = useHistory();
    const user=useSelector(selectUser);


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const dispatch=useDispatch();
    const LogOut=()=> {
        dispatch(setLogedIn(false))
        dispatch(setUser(null))
        localStorage.removeItem('token')
        history.push(HOME)
    }

    return (

        <div className={classes.root} >
            <div  >
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className={classes.link}
                >
                    <img src={user.avatar} alt='surati' className={classes.image}/>
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <Box textAlign='center' paddingBottom='10px' fontWeight='bold'>{user.name}</Box>
                                        <MenuItem onClick={handleClose}><Link to={PRIVATE} className={classes.link}>My account</Link></MenuItem>
                                        <MenuItem onClick={LogOut} className={classes.link}>Logout</MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}