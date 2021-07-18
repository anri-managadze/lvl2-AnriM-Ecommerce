import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    btnsignup: {
        width: '90px',
        height:'35px',
        border: '1px solid #42AAFF',
        borderRadius: '30px',
        color: '#42AAFF',
        fontSize: '11px',
        fontWeight: 'bold'
    },
    btnall: {
        fontSize: '16px',
        textTransform: 'inherit',
        width: '90px',
        height:'35px',
    },
    link: {
        textDecoration: 'none',
        color: '#808080',
    }
}));