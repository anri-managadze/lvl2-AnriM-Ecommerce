import React, {useContext} from "react";
import { ErrorMessage,  FormikProvider, useFormik } from "formik";
import CheckBox from "../../../component/CheckBox";
import { Box, Button, TextField } from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import { useStyles } from "./SignInFormStyle";
import * as Yup from "yup";
import { PRIVATE } from "../../../roures";
import { Api } from "../../../api";
import { UserContext} from "../../../store/UserContextProvider";



const SignInForm = () => {
  const classes = useStyles();
  const history = useHistory();

  const userData=useContext(UserContext);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required(<Box color='red'>Required</Box>),
      password: Yup.string().required(<Box color='red'>Password is required</Box>),
    }),
    onSubmit: (values) => {
      console.log(values);
      Api.sighIn(formik.values.email,formik.values.password)
          .then((json) => {
            localStorage.setItem('token',json.token.access_token);
            userData.setData({
              ...userData.data,
              isLogedIn: true,
              isLogedOut: false,
              user: json
            })
            history.push(PRIVATE);
        })
        .catch((error) => {
          console.log(error, "error")
        }
      );
    },
  });

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
