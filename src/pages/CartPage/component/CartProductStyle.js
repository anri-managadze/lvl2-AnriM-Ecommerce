import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({

    img: {
        width: "80%",
    },
    root: {
        display: "flex",
        flexDirection: 'column',
        minHeight: '300px'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12,
        color: '#4F4F4F'
    },
    pos: {
        marginTop: '15px',
        color: '#6C757D'
    },
    btn: {
        color: '#6C757D',
    }
});