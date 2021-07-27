import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  banner: {
    minWidth: "100%",
    zIndex: "1",
    backgroundColor: "#FBFBFB",
    padding: "100px 0 50px 0",
    textAlign: "center",
    fontSize: "30px",
  },

  cont: {
    maxWidth: "40%",
    margin: "0 auto",
  },
  iconfa: {
    fontSize: "35px",
    color: "#3B5998",
  },
  icontw: {
    fontSize: "35px",
    color: "#55ACEE",
  },
  iconin: {
    fontSize: "35px",
    color: "#0082CA",
  },
  icongit: {
    fontSize: "35px",
    color: "#333333",
  },
}));
