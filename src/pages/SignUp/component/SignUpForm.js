import React, {useState} from 'react';
import { useFormik} from "formik";
import {Box, Button, TextField} from "@material-ui/core";
import CheckBox from "../../../page-component/CheckBox";
import {useStyles} from "./SignUpFormStyle";
import { Redirect } from 'react-router-dom';
import SignIn from "../../SignIn/SignIn";




const SignUpForm = () => {
    const classes=useStyles();
    const [isregister,setIsregister]=useState();


    const formik = useFormik({
        initialValues: {
            firstname: '',
            email: '',
            password: '',
            password_confirmation: '',
        },
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

            <form onSubmit={formik.handleSubmit}>
                <Box display='flex' flexDirection='column' marginTop='50px'>
                    <TextField type="text" name="name" id='name'  variant="outlined" label="First Name" onChange={formik.handleChange} value={formik.values.name} size="small" className={classes.fname}/>
                    <TextField type="email" name="email" id='email'  variant="outlined" label="Your Email"  size="small" onChange={formik.handleChange} value={formik.values.email} className={classes.email}/>
                    <TextField type="password" name="password" id='password' variant="outlined" label="Your Password"  size="small" onChange={formik.handleChange} value={formik.values.password} className={classes.pass}/>
                    <Box fontSize='14px' color='#6C757D'><label>At least 8 characters and 1 digit</label></Box>
                    <TextField type="password" name="password_confirmation" id='password_confirmation' variant="outlined" label="Your Password Confirmation"  size="small" onChange={formik.handleChange} value={formik.values.password_confirmation} className={classes.pass}/>
                </Box>

            <Box marginTop='15px' display='flex' justifyContent='center'>
                <CheckBox label='SUBSCRIBE TO OUR NEWSLETTER' value='subscribe'/>
            </Box>
            <Box textAlign='center' marginTop='15px'>
                <Button type="submit"  variant="contained" className={classes.btn}>Sign Up</Button>
            </Box>
            </form>
            {isregister&&<Redirect to={SignIn} /> }
        </>
    )
};

export default SignUpForm;