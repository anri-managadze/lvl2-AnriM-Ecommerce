import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  media: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      justifyContent: "center",
      marginTop: "15px",
    },
  },
  title: {
    color: "#4F4F4F",
  },
  price: {
    color: "#4F4F4F",
    fontSize: "20px",
  },
  link: {
    textDecoration: "none",
  },
  root: {
    maxWidth: 245,
    textAlign: "center",
  },
}));
