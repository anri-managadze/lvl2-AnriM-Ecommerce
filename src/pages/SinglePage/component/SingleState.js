import React, { useEffect, useState } from "react";
import { Box, Button, Container, Grid } from "@material-ui/core";
import FullWidthTab from "./FullWidthTab";
import { Rating } from "@material-ui/lab";
import Quantity from "./ Quantity";
import RadioButSingle from "./RadioButSingle";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useParams } from "react-router-dom";
import Loader from "../../../component/Loader";
import { Api } from "../../../api";
import { useStyles } from "./SingleStateStyle";

const SingleState = () => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Api.getSingleProduct(id)
      .then((json) => {
        setData(json);
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <Container>
      <Loader isLoading={loading}>
        {!!data.hasOwnProperty("title")}
        <Grid container>
          <Grid item xs={12} sm={5} padding="50px " component={Box}>
            <Box>
              <img src={data.image} alt="surati" className={classes.img} />
            </Box>
            <Box display="flex" justifyContent="space-between" mt="15px">
              <img src={data.image} alt="surati" width="22%" />
              <img src={data.image} alt="surati" width="22%" />
              <img src={data.image} alt="surati" width="22%" />
              <img src={data.image} alt="surati" width="22%" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={7} padding="50px " component={Box}>
            <Box>
              <Box fontSize="20px" color="#4F4F4F" fontWeight="bold">
                {" "}
                {data.title}
              </Box>
              <Box marginTop="20px" fontSize="13px">
                {" "}
                {data.category}
              </Box>
              <Box marginTop="20px">
                <Rating
                  name="half-rating-read"
                  defaultValue={4}
                  precision={0.5}
                  readOnly
                  className={classes.root}
                />
              </Box>
              <Box
                marginTop="20px"
                fontSize="20px"
                color="#4F4F4F"
                fontWeight="bold"
              >
                $ {data.price}
              </Box>
              <Box marginTop="30px"> {data.description}</Box>
              <Box
                marginTop="30px"
                fontSize="15px"
                color="#4F4F4F"
                display="flex"
              >
                <Box fontWeight="bold"> Model </Box>
                <Box color="#7D5755" marginLeft="100px">
                  {data.model}
                </Box>
              </Box>
              <Box
                marginTop="30px"
                fontSize="15px"
                color="#4F4F4F"
                display="flex"
              >
                <Box fontWeight="bold">Color </Box>
                <Box color="#7D5755" marginLeft="108px">
                  {data.Color}
                </Box>
              </Box>
              <Box
                marginTop="30px"
                fontSize="15px"
                color="#4F4F4F"
                display="flex"
              >
                <Box fontWeight="bold">Delivery </Box>
                <Box color="#7D5755" marginLeft="90px">
                  {data.Delivery}
                </Box>
              </Box>
              <Box borderBottom="1px solid #E5E5E5" marginTop="30px">
                {" "}
              </Box>
            </Box>
            <Box mt="20px" display="flex">
              <Box>
                <Box color="#554F4F" fontSize="15px">
                  Quantity
                </Box>
                <Box>
                  <Quantity />
                </Box>
              </Box>
              <Box ml="15px">
                <Box color="#554F4F" fontSize="15px">
                  Select size
                </Box>
                <Box display="flex" mt="10px">
                  <RadioButSingle />
                </Box>
              </Box>
            </Box>
            <Box display="flex" mt="25px">
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.containedPrimary}
                >
                  buy Now
                </Button>
              </Box>
              <Box ml="5px">
                <Button variant="contained" className={classes.contained}>
                  <ShoppingCartIcon className={classes.icon} />
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Loader>
      <Box padding="0 50px ">
        <FullWidthTab />
        <Box border="0.5px solid #E5E5E5" marginTop="30px">
          {" "}
        </Box>
      </Box>
    </Container>
  );
};

export default SingleState;
