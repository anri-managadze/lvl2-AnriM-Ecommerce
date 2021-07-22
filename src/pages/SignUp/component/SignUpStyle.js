import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    banner: {
        minWidth: '100%',
        backgroundColor: '#FBFBFB',
        padding: '100px 0 50px 0',
        textAlign: 'center',
        fontSize: '30px'
    },
    cont: {
        maxWidth: '40%',
        margin: '0 auto',
        borderBottom: '1px solid #C1C1C1'
    },
    iconfa: {
        fontSize: '35px',
        color: '#3B5998',
    },
    icontw: {
        fontSize: '35px',
        color: '#55ACEE'
    },
    iconin: {
        fontSize: '35px',
        color: '#0082CA'
    },
    icongit: {
        fontSize: '35px',
        color: '#333333'

    },
    footer: {
        maxWidth: '40%',
        margin: '0 auto',
        textAlign: 'center',
        padding: '20px'
    },

    link: {
        padding: '9px',
        textDecoration: 'none',
        color: '#1266F1',
        ' &:hover': {
            color: '#0847ad'
        }
    },
}));