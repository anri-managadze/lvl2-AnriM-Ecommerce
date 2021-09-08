import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import {CART, SINGLE} from "../../../roures";
import { Link } from "react-router-dom";
import Loader from "../../../component/Loader";
import { useStyles } from "./ListStateStyle";
import { Api } from "../../../api";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Pagination } from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../../store/products/productsActionCreator";
import {selectProducts} from "../../../store/products/productsSelector";
import AddCard from "../../CartPage/addCard";


const ListState = () => {
  const classes = useStyles();
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page,setPage]=useState(1 );
  const dispatch=useDispatch();
  const data= useSelector(selectProducts);


    useEffect( () => {
        setLoading(true);
        Api.getProductList(page)
            .then((data) => {

                // setData(data)
                dispatch(setProducts(data))

            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    },[page]);

    const onChange = (e,p) => {
      setPage(p)
    }



  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.media}>
          <ViewListIcon />
          <ViewModuleIcon />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          component={Box}
          justifyContent="flex-end"
          className={classes.media}
        >
          <Pagination count={10} defaultPage={page} page={page}  onChange={onChange} color='primary'/>
        </Grid>
      </Grid>
      <Box>
        <Loader isLoading={loading}>

          <Grid container>
            {!!data.length && data.map((data,index) => {
              return (
                <Grid key={index} item xs={12} sm={4} component={Box} p="5px">
                  <Link
                    to={SINGLE.replace(":id", data.id)}
                    className={classes.list}
                  >
                    <Card className={classes.root}>
                      <CardActionArea >
                        <CardMedia
                          component="img"
                          alt="surati"
                          height="240"
                          image={data.image}
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.title}
                          >
                            {data.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.price}
                          >
                            $ {data.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Link>
                  {/*<Link to={CART.replace(":id", data.id)}>*/}
                  {/*<AddCard data={data}/>*/}
                  {/*</Link>*/}
                </Grid>
              );
            })}
          </Grid>
        </Loader>
      </Box>
      <Grid container>
        <Grid item xs={12} sm={6} className={classes.media}>
          <ViewListIcon />
          <ViewModuleIcon />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.media}>
          <Pagination
              count={10} defaultPage={page} page={page}  onChange={onChange}
              color="primary"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListState;
