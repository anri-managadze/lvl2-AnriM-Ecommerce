import React from "react";
import { useFormik } from "formik";
import { useStyles } from "./AddProductFormStyle";
import { FilledInput } from "@material-ui/core";
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
          <label htmlFor="title" className={classes.label}>
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.title}
            className={classes.input}
          />
          <label htmlFor="price" className={classes.label}>
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.price}
            className={classes.input}
          />
          <label htmlFor="Category" className={classes.label}>
            Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
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
