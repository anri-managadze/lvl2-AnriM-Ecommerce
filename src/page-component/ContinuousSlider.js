import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  main: {
    width: 200,
  },
  root: {
    color: "#1266F1",
  },
  track: {
    height: "6px",
  },
  thumb: {
    marginTop: "-3px",
  },
  rail: {
    height: "6px",
  },
});

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.main} display="flex">
      <Box marginTop="15px" fontSize="15px">
        {" "}
        $0{" "}
      </Box>
      <Slider
        value={value}
        onChange={handleChange}
        aria-labelledby="continuous-slider"
        classes={{
          root: classes.root,
          track: classes.track,
          thumb: classes.thumb,
          rail: classes.rail,
        }}
      />
      <Box marginTop="15px" fontSize="15px">
        {" "}
        $100{" "}
      </Box>
    </Box>
  );
}
