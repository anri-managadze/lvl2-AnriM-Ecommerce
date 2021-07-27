import React from "react";
import { Box, Button, makeStyles, TextField } from "@material-ui/core";
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

const Review = () => {
  const classes = usestyle();
  return (
    <>
      <Box>
        <Box
          fontSize="20px"
          color="#4F4F4F"
          paddingBottom="15px"
          fontWeight="bold"
        >
          1 review for Fantasy T-shirt
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <Box>
              <img
                src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
                alt="surati"
              />{" "}
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              marginLeft="15px"
            >
              <Box display="flex" flexWrap="wrap">
                <Box color="#4F4F4F" fontWeight="bold">
                  Marthasteward
                </Box>
                <Box color="#554F4F">– January 28, 2020</Box>
              </Box>
              <Box color="#554F4F">Nice one, love it!</Box>
            </Box>
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
        </Box>
        <Box border="0.5px solid #E5E5E5" marginTop="10px">
          {" "}
        </Box>
      </Box>
      <Box>
        <Box
          fontSize="20px"
          color="#4F4F4F"
          padding="15px 0 "
          fontWeight="bold"
        >
          Add a review
        </Box>
        <Box fontSize="15px" color="#554F4F" padding="10px 0">
          Your email address will not be published.
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
        <form>
          <Box mt="15px">
            <TextField
              id="outlined-basic"
              label="Your Review "
              variant="outlined"
              fullWidth="100%"
            />
          </Box>
          <Box mt="15px">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              fullWidth="100%"
              size="small"
            />
          </Box>
          <Box mt="15px">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth="100%"
              size="small"
            />
          </Box>
          <Button className={classes.btn} variant="contained" color="primary">
            Add a Review
          </Button>
        </form>
      </Box>
    </>
  );
};

export default Review;
