import React from "react";
import { ErrorMessage, FormikProvider, useFormik, Field } from "formik";
import {Box, Button, TextField } from "@material-ui/core";
import CheckBox from "../../../component/CheckBox";
import { useStyles } from "./SignUpFormStyle";
import { useHistory } from "react-router-dom";
import { SIGN_IN } from "../../../roures";
import * as Yup from "yup";
import {Api} from "../../../api";
import {setLoading} from "../../../store/user/userActionsCreator";
import {useDispatch} from "react-redux";



const SignUpForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch=useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values)
      dispatch(setLoading(true))
      Api.sighUp(formik.values.name,formik.values.email,formik.values.password,formik.values.password_confirmation,formik.values.avatar)
        .then((json) => {
          console.log(json);
          history.push(SIGN_IN);
        })
        .catch((error) => console.log(error, "error"))
          .finally(()=>dispatch(setLoading(false)));
    },
  });
  return (
    <>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column" marginTop="50px">
            <Field as={TextField} type="text" name="name" variant="outlined" label="First Name" size="small" className={classes.fname} />
            <ErrorMessage name="name" />

            <Field as={TextField} type="email" name="email" variant="outlined" label="Your Email" size="small" className={classes.email} />
            <ErrorMessage name="email" />

            <Field as={TextField} type="password" name="password" variant="outlined" label="Your Password" size="small" className={classes.pass}/>
            <ErrorMessage name="password" />

            <Box fontSize="14px" color="#6C757D">
              <label>At least 8 characters and 1 digit</label>
            </Box>

            <Field as={TextField} type="password" name="password_confirmation" variant="outlined" label="Your Password Confirmation" size="small" className={classes.pass}/>
            <ErrorMessage name="password" />

          </Box>

          <Box marginTop="15px" display="flex" justifyContent="center">
            <CheckBox label="SUBSCRIBE TO OUR NEWSLETTER" value="subscribe" />
          </Box>
          <Box textAlign="center" marginTop="15px">
            <Button type="submit" variant="contained" className={classes.btn}>
              Sign Up
            </Button>
          </Box>
        </form>
      </FormikProvider>
    </>
  );
};

export default SignUpForm;
