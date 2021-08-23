import React from "react";
import {ErrorMessage, Field, FormikProvider, useFormik} from "formik";
import CheckBox from "../../../component/CheckBox";
import { Box, Button, TextField } from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import { useStyles } from "./SignInFormStyle";
import * as Yup from "yup";
import { PRIVATE } from "../../../roures";
import { Api } from "../../../api";
import {useDispatch} from "react-redux";
import {setLoading, setLogedIn, setUser} from "../../../store/user/userActionsCreator";
import {SignInAction} from "../../../store/user/userAction";


const SignInForm = () => {
  const classes = useStyles();
  const history = useHistory();

  // const userData=useContext(UserContext);
  const dispatch=useDispatch();
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
     dispatch(SignInAction(values.email,values.password))
         .then(()=>{history.push(PRIVATE)})
         .catch((error) => {
               console.log(error, "error")
             }
         )
         .finally(()=>dispatch(setLoading(false)));
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
          <Box className={classes.field}>
            <Field as={TextField} type="email" name="email" variant="outlined" label="Your Email" size="small" className={classes.field1} />
            <ErrorMessage name="email" />

            <Field as={TextField} type="password" name="password" variant="outlined" label="Your Password" size="small" className={classes.field2}/>
            <ErrorMessage name="password" />
          </Box>
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
