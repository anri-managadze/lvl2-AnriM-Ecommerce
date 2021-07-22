import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    field: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '40px'
    },
    field1 : {
        zIndex: '0'
    },
    field2 : {
        marginTop: '25px',
        zIndex: '0'
    },
    link: {
        padding: '9px',
        textDecoration: 'none',
        color: '#1266F1',
       ' &:hover': {
            color: '#0847ad'
       }
    },
    btn : {
        width: '100px',
        height: '45px',
        backgroundColor: '#1266F1',
        color: 'white',
        padding: '20px',
        fontSize: '12px',
        ' &:hover': {
            backgroundColor: '#347bee'
        }
    }
});