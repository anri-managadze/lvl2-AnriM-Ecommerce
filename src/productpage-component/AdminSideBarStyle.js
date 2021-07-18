import {makeStyles} from "@material-ui/core";

export const useStyles=makeStyles(()=> ({
    sidebar: {
        width: '20%',
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    link: {
        listStyle: 'none',
        marginTop: '50px',
        padding: '5px 20px 5px 20px ',
        color: 'black',
        cursor: 'pointer',
        textDecoration: 'none',
        '&:hover': {
            color: '#1266F1'
        }
    },
})) ;