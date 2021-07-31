import React, { useEffect, useState } from "react";
import { useStyles } from "./TableStyle";
import Loader from "../../component/Loader";
import {FormControl, MenuItem, Select} from "@material-ui/core";

const Table = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [limit,setLimit]=useState(5);


  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
        .then((res) => res.json())
        .then((json) => {
          setData(json);
        })
        .catch((err) => {
        })
        .finally(() => setLoading(false));
  }, [limit]);

  const handleChange = (e) => {
    setLimit(e.target.value);
  };

  return (
      <>
      <FormControl className={classes.formControl}>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={limit}
            onChange={handleChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
        </Select>
      </FormControl>
    <Loader isLoading={loading}>
      <table className={classes.border}>
        <thead className={classes.tr}>
          <th className={classes.tr}>Picture</th>
          <th className={classes.tr}>Title</th>
          <th className={classes.tr}>Price</th>
          <th className={classes.tr}>Category</th>
        </thead>
        {typeof data != "undefined" ? (
          <>
            {data.map((el, index) => {
              return (
                <tbody key={index}>
                  <td className={classes.th}>
                    <img src={el.image} alt="surai" className={classes.image} />
                  </td>
                  <td className={classes.th}>{el.title}</td>
                  <td className={classes.th}>${el.price}</td>
                  <td className={classes.th}>{el.category}</td>
                </tbody>
              );
            })}
          </>
        ) : (
          ""
        )}
      </table>
    </Loader>
      </>
  );
};

export default Table;
