import React, {useState} from 'react';
import {ErrorMessage, FormikProvider, useFormik} from "formik";
import {Box, Button, TextField} from "@material-ui/core";
import CheckBox from "../../../page-component/CheckBox";
import {useStyles} from "./SignUpFormStyle";
import { Redirect } from 'react-router-dom';
import {SIGN_IN} from "../../../Roures";
import * as Yup from 'yup';



const SignUpForm = () => {
    const classes=useStyles();
    const [isregister,setIsregister]=useState();


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
        validationSchema :Yup.object().shape({
            name: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: values => {
            fetch('http://159.65.126.180/api/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json'
                },
                body: JSON.stringify(
                    {
                        name: formik.values.name,
                        email: formik.values.email,
                        password: formik.values.password,
                        password_confirmation: formik.values.password_confirmation,
                    }
                ),

            })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                    setIsregister(true)
                })
                .catch(error => console.log(error, 'error'))
        }
    });


    return (
        <>
        {isregister ? <Redirect to={SIGN_IN} /> : (
            <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <Box display='flex' flexDirection='column' marginTop='50px'>
                    <TextField type="text" name="name" id='name'  variant="outlined" label="First Name" onChange={formik.handleChange} value={formik.values.name} size="small" className={classes.fname}/>
                        <ErrorMessage name='name'/>
                    <TextField type="email" name="email" id='email'  variant="outlined" label="Your Email"  size="small" onChange={formik.handleChange} value={formik.values.email} className={classes.email}/>
                        <ErrorMessage name='email'/>
                    <TextField type="password" name="password" id='password' variant="outlined" label="Your Password"  size="small" onChange={formik.handleChange} value={formik.values.password} className={classes.pass}/>
                        <ErrorMessage name='password'/>
                    <Box fontSize='14px' color='#6C757D'><label>At least 8 characters and 1 digit</label></Box>
                    <TextField type="password" name="password_confirmation" id='password_confirmation' variant="outlined" label="Your Password Confirmation"  size="small" onChange={formik.handleChange} value={formik.values.password_confirmation} className={classes.pass}/>
                        <ErrorMessage name='password'/>
                </Box>

            <Box marginTop='15px' display='flex' justifyContent='center'>
                <CheckBox label='SUBSCRIBE TO OUR NEWSLETTER' value='subscribe'/>
            </Box>
            <Box textAlign='center' marginTop='15px'>
                <Button type="submit"  variant="contained" className={classes.btn}>Sign Up</Button>
            </Box>
            </form>
        </FormikProvider>
        )}
    </>
    )
};

export default SignUpForm;