import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    image: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: "#EAEAEA",
        padding: '20px',
        borderRadius: '5px'
    },
    img: {
        maxWidth: '100%',

    },
    title:  {
        color: '#4F4F4F',
        fontSize: '20px'
    },
    price: {
        color: '#4F4F4F',
        fontSize: '20px'
    },
    list: {
        textDecoration: 'none',
    }
});