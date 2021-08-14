import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        margin: '120px auto',
        display: 'flex',
        justifyContent: 'center'
    },
    media: {
        width:320,
        textAlign: "center"
    },
    image: {
        width:220,
        height: 220,
        borderRadius: '50%',
    },
    info: {
        width: '40%',
        margin: '20px 0 0 20px',
        borderBottom: '2px solid #1266F1',
        padding: '10px',
        display: "flex"
    }
});