import React, {useEffect, useState} from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {SINGLE} from "../../../Roures";
import {Link} from "react-router-dom";
import Loader from "../../../page-component/Loader";
import {useStyles} from "./ListStateStyle";
import {Api} from "../../../api";

const ListState = () => {
    const classes=useStyles();
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        setLoading(true);
        Api.getProductList()
            .then(el => {
                setData(el);
                console.log((el))
            })
            .catch(err=>
                console.log(err))
            .finally(()=>setLoading(false))
    },[]);

    return (
        <Box>
            <Loader isLoading={loading}>
            {!!data.hasOwnProperty('title') }
                <Grid container>
                    {data.map((el, index) => {
                        return (
                            <Grid key={index} item xs={12} sm={4} component={Box} p='5px' >
                                <Link to={SINGLE.replace(':id', el.id)} className={classes.list} >
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                alt="surati"
                                                height="240"
                                                image={el.image}
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="textSecondary" component="p" className={classes.title}>
                                                    {el.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p" className={classes.price}>
                                                   $ {el.price}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>

            </Loader>
        </Box>

    )
}



export default ListState;