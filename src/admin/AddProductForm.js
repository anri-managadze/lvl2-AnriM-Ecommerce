import React from "react";
import { useFormik } from "formik";
import { useStyles } from "./AddProductFormStyle";
import {FilledInput, TextField} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const AddProductForm = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
      category: "",
    },
    onSubmit: (values) => {
      console.log(values);
      fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({
          image: formik.values.image,
          title: formik.values.title,
          price: formik.values.price,
          category: formik.values.category,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setStatus(true);
        })
        .catch((error) => console.log(error, "error"));
    },
  });
  const { status, setStatus } = formik;
  return (
    <>
      {" "}
      {status ? (
        <Alert severity="success">This is a success message!</Alert>
      ) : (
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <label htmlFor="image" className={classes.label}>
            Image
          </label>
          <FilledInput
            label="Light Icon:"
            type="file"
            id="image"
            name="image"
            accept="image/x-png"
            onBlur
          />
          <TextField
            id="title"
            name="title"
            type="text"
            variant="outlined"
            label="Title"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.title}
            className={classes.input}
          />
          <TextField
            id="price"
            name="price"
            type="number"
            variant="outlined"
            label="Price"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.price}
            className={classes.input}
          />
          <TextField
            id="category"
            name="category"
            type="text"
            variant="outlined"
            label=" Category"
            size="small"
            onChange={formik.handleChange}
            value={formik.values.categori}
            className={classes.input}
          />
          <button type="submit" className={classes.btn}>
            Submit
          </button>
        </form>
      )}
    </>
  );
};
export default AddProductForm;
