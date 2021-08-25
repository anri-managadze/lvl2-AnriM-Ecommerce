import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root2: {
        display: "flex",
        flexDirection: "column",
        height: '300px',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 12,
        color: '#4F4F4F'
    },
    p: {
        marginTop: '15px',
        color: '#6C757D'
    },
    p2 : {
        marginTop: '25px',
        color: '#6b6969',
        fontWeight: 'bold',
        fontSize: '16px',
        borderTop: '1px solid #6C757D',
        paddingTop: '25px'
    },
    btn : {
        width: '100%',
        height: '45px',
        backgroundColor: '#1266F1',
        color:'white',
        fontWeight: 'bold',
        "&:hover": {
            background: "#4586f1"
        },
    }
});