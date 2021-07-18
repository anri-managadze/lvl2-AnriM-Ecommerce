import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
    header: {
        minWidth: '100%',
        padding: '0',
        position: "fixed",
        top: '0',
        zIndex: '1',

        boxShadow: '0px 2px 10px -1px #F4F4F4 !important'
    },
    icon: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    list: {
        textDecoration: 'none',
        color: 'black'
    }
}));