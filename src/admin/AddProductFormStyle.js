import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginTop: "15px",
  },
  btn: {
    margin: "30px 0 30px 0",
    width: "150px",
    height: "30px",
    backgroundColor: "#1266F1",
    color: "white",
    border: "none",
    borderRadius: "3px",
  },
}));
