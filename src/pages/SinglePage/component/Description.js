import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const usestyle = makeStyles({
  btn: {
    float: "right",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#1266F1",
    color: "white",
    borderRadius: "3px",
    marginTop: "15px",
  },
  root: {
    color: "#1266F1",
    fontSize: "20px",
  },
});
const Description = () => {
  const classes = usestyle();
  return (
    <Box>
      <Box
        fontSize="20px"
        color="#4F4F4F"
        paddingBottom="15px"
        fontWeight="bold"
      >
        Product Description{" "}
      </Box>
      <Box fontSize="12px" color="#554F4F" paddingBottom="15px">
        SHIRTS{" "}
      </Box>
      <Box>
        <Rating
          name="half-rating-read"
          defaultValue={4}
          precision={0.5}
          readOnly
          className={classes.root}
        />
      </Box>
      <Box fontSize="20px" color="#4F4F4F" paddingBottom="15px">
        12.99 ${" "}
      </Box>
      <Box fontSize="15px" color="#554F4F" paddingBottom="15px">
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        sapiente illo. Sit error voluptas repellat rerum quidem, soluta enim
        perferendis voluptates laboriosam. Distinctio, officia quis dolore quos
        sapiente tempore alias.
      </Box>
    </Box>
  );
};

export default Description;
