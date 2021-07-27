import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  fname: {
    zIndex: "0",
  },
  email: {
    marginTop: "25px",
    zIndex: "0",
  },
  pass: {
    marginTop: "25px",
    zIndex: "0",
  },
  phone: {
    marginTop: "25px",
    zIndex: "0",
  },
  btn: {
    width: "100px",
    height: "45px",
    backgroundColor: "#1266F1",
    color: "white",
    padding: "20px",
    fontSize: "12px",
    " &:hover": {
      backgroundColor: "#347bee",
    },
  },
}));
