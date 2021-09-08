import React  from "react";
import { Box, makeStyles } from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectCounter} from "../store/cart/cartSelector";
import {setDecr, setIncr} from "../store/cart/cartActionCreator";


const useStyle = makeStyles({
  btn: {
    width: "50px",
    height: "35px",
    textAlign: "center",
    border: "1px solid #E4E4E4",
    borderRadius: "3px",
    backgroundColor: "white",
    fontSize: "20px",
  },
});

const Quantity = () => {
  const classes = useStyle();
  const counter=useSelector(selectCounter)
  const dispatch=useDispatch();

  return (
    <>
      <Box display="flex" mt="15px">
        <button onClick={() =>counter>0 && dispatch(setDecr(counter))}  className={classes.btn}>
          -
        </button>
        <button className={classes.btn}>{counter} </button>
        <button onClick={() => dispatch(setIncr(counter))} className={classes.btn}>
          +
        </button>
      </Box>
    </>
  );
};

export default Quantity;
