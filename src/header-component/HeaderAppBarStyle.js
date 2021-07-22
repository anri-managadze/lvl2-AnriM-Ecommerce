import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    header: {
        minWidth: '100%',
        padding: '0',
        position: "fixed",
        top: '0',
        zIndex: '1',

    },
    icon: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'black',
        marginTop: '10px'
    },
    list: {
        textDecoration: 'none',
        color: 'black'
    },
    elevation4 : {
        boxShadow: '0 2px 25px 0 rgb(0 0 0 / 12%)',
    },
    headicon: {
        fontSize: '45px'
    }
}));