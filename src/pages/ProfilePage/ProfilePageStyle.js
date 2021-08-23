import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles({
    root: {
        marginTop: '120px',
        display: 'flex',
        justifyContent: 'center'
    },
    media: {
        maxWidth:220,
        textAlign: "center"
    },
    image: {
        maxWidth:220,
        height: 220,
        borderRadius: '50%',
    },
    info: {
        margin: '20px 0 0 20px',
        borderBottom: '2px solid #1266F1',
        padding: '10px',
        display: "flex"
    },
    chemail: {
        marginTop: '35px'
    },
    subBtn : {
        backgroundColor: '#1266F1',
        color: 'white',
        margin: '35px 0',
        "&:hover": {
            background: "#194998"
        },
    }

});