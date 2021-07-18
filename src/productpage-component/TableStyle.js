import {makeStyles} from "@material-ui/core";

export const useStyles=makeStyles(()=> ({
    border:{
        borderRadius: '3px',
        margin: '80px auto'
    },
    tr: {
        color: 'white',
        backgroundColor : '#1266F1',
        padding: '10px',
        textAlign: 'left',
    },
    th: {
        padding: '10px',
        textAlign: 'left',
        borderRadius: '3px',
        backgroundColor: '#f6f3f3'
    },
    image: {
        maxWidth: '100px',
        height: '100px'
    }
})) ;