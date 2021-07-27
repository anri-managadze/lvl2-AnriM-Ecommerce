import React from "react";
import { ErrorMessage,  FormikProvider, useFormik } from "formik";
import CheckBox from "../../../page-component/CheckBox";
import { Box, Button, TextField } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useStyles } from "./SignInFormStyle";
import * as Yup from "yup";
import { PRIVATE } from "../../../roures";
import { Api } from "../../../api";

const SignInForm = () => {
  const classes = useStyles();
  const history = useHistory();


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      Api.sighIn(formik.values.email,formik.values.password)
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error(res.text());
            }
          })
          .then((json) => {
            history.push(PRIVATE);
            console.log(json);
        })
        .catch((error) => {
          setErrors(error)
          console.log(error, "error")
        }
      );
    },
  });
  const {setErrors}=formik;

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <FormikProvider value={formik}>
          <Box className={classes.field}>
            <TextField
              type="email"
              name="email"
              variant="outlined"
              label="Your Email"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={classes.field1}
            />
            <ErrorMessage name="email" />
            <TextField
              type="password"
              name="password"
              variant="outlined"
              label="Your Password"
              size="small"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={classes.field2}
            />
            <ErrorMessage name="password" />
          </Box>
        </FormikProvider>
        <Box display="flex" justifyContent="space-between" marginTop="15px">
          <CheckBox label="REMEMBER ME" value="remember" />
          <Link to="#" className={classes.link}>
            Forgot password?
          </Link>
        </Box>
        <Box textAlign="center">
          <Button type="submit" className={classes.btn} variant="contained">
            Sign In
          </Button>
        </Box>
      </form>
    </FormikProvider>
  );
};
export default SignInForm;
