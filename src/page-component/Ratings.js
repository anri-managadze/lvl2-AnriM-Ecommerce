import React from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#1266F1",
    fontSize: "20px",
  },
});

export default function SimpleRating() {
  const classes = useStyles();
  return (
    <Box p="0">
      <Box
        component="fieldset"
        borderColor="transparent"
        p="0"
        m="10px 0 0 0"
        display="flex"
      >
        <Rating
          name="read-only"
          value={4}
          classes={{
            root: classes.root,
          }}
        />
        <Box fontSize="14px" color="#6c757d" ml="15px">
          &UP
        </Box>
      </Box>
      <Box
        component="fieldset"
        borderColor="transparent"
        p="0"
        m="10px 0 0 0"
        display="flex"
      >
        <Rating
          name="read-only"
          value={3}
          classes={{
            root: classes.root,
          }}
        />
        <Box fontSize="14px" color="#6c757d" ml="15px">
          &UP
        </Box>
      </Box>
      <Box
        component="fieldset"
        borderColor="transparent"
        p="0"
        m="10px 0 0 0"
        display="flex"
      >
        <Rating
          name="read-only"
          value={2}
          classes={{
            root: classes.root,
          }}
        />
        <Box fontSize="14px" color="#6c757d" ml="15px">
          &UP
        </Box>
      </Box>
      <Box
        component="fieldset"
        borderColor="transparent"
        p="0"
        m="10px 0 0 0"
        display="flex"
      >
        <Rating
          name="read-only"
          value={1}
          classes={{
            root: classes.root,
          }}
        />
        <Box fontSize="14px" color="#6c757d" ml="15px">
          &UP
        </Box>
      </Box>
    </Box>
  );
}
