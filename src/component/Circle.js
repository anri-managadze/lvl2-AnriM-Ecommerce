import React from "react";
import { Box } from "@material-ui/core";

const Circle = ({ bgcolor,border }) => {
  return (
    <Box
      width="30px"
      height="30px"
      borderRadius="50%"
      border={border}
      bgcolor={bgcolor}
      ml="15px"
      mt="15px"
    >
      {" "}
    </Box>
  );
};

export default Circle;
