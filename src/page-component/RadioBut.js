import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  label: {
    fontSize: "13px",
    color: "#847592",
  },
  checked: {
    color: "#1266F1!important",
  },
});

export default function RadioBut() {
  const classes = useStyles();
  return (
    <RadioGroup>
      <FormControlLabel
        value="under25"
        control={
          <Radio classes={{ checked: classes.checked }} color="primary" />
        }
        label="UNDER $25"
        classes={{
          label: classes.label,
        }}
      />
      <FormControlLabel
        value="2550"
        control={
          <Radio classes={{ checked: classes.checked }} color="primary" />
        }
        label="$25 TO $50"
        classes={{
          label: classes.label,
        }}
      />
      <FormControlLabel
        value="50100"
        control={
          <Radio classes={{ checked: classes.checked }} color="primary" />
        }
        label="$50 TO $100"
        classes={{
          label: classes.label,
        }}
      />
      <FormControlLabel
        value="100200"
        control={
          <Radio classes={{ checked: classes.checked }} color="primary" />
        }
        label="$100 TO $200"
        classes={{
          label: classes.label,
        }}
      />
      <FormControlLabel
        value="200above"
        control={
          <Radio classes={{ checked: classes.checked }} color="primary" />
        }
        label="$200 & ABOVE"
        classes={{
          label: classes.label,
        }}
      />
    </RadioGroup>
  );
}
