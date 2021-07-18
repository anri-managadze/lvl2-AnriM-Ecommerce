import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    banner: {
        marginTop: '150px',
        backgroundColor: '#1266F1',
    },
    media: {
        [theme.breakpoints.only('xs')] : {
            display: 'flex',
            justifyContent: 'center'
        }
    }
}));