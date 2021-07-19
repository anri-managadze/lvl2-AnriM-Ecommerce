import React, {useEffect, useState} from 'react';
import {useStyles} from "./TableStyle";
import Loader from "../../page-component/Loader";


const Table = () => {
    const classes=useStyles();
    const [data,setData]=useState([]);
    const [loading,setLoading]= useState(false);

    useEffect(()=> {
        setLoading(true);
        fetch('https://fakestoreapi.com/products?limit=10')
            .then(res=>res.json())
            .then(json=>{
                setData(json);
                console.log(json);
            })
            .catch(err=> {
                console.log(err)
            })
            .finally(()=> setLoading(false));
    },[])
    return (
            <Loader isLoading={loading}>
            <table className={classes.border} >
                <thead className={classes.tr}>
                    <th className={classes.tr}>Picture</th>
                    <th className={classes.tr}>Title</th>
                    <th className={classes.tr}>Price</th>
                    <th className={classes.tr}>Category</th>
                </thead>
                {(typeof data!='undefined') ? (
                    <>
                        {data.map((el,index) => {
                                return (
                                    <tbody key={index}>
                                        <td className={classes.th}><img src={el.image} alt='surai' className={classes.image}/></td>
                                        <td className={classes.th}>{el.title}</td>
                                        <td className={classes.th}>${el.price}</td>
                                        <td className={classes.th}>{el.category}</td>
                                    </tbody>
                                )
                            })}
                    </>
                    ) : ('')
                }
            </table>
        </Loader>
    );
};

export default Table;
