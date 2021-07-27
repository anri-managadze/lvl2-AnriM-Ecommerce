import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
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

export default function CheckBox({ label, value }) {
  const classes = useStyles();
  return (
    <FormGroup>
      <FormControlLabel
        value={value}
        control={
          <Checkbox classes={{ checked: classes.checked }} color="primary" />
        }
        label={label}
        classes={{
          label: classes.label,
        }}
      />
    </FormGroup>
  );
}
