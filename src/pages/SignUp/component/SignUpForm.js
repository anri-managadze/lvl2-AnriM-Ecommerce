import React from 'react';
import { useFormik} from "formik";
import {Box, Button, TextField} from "@material-ui/core";
import CheckBox from "../../../page-component/CheckBox";
import {useStyles} from "./SignUpFormStyle";

const SignUpForm = () => {
    const classes=useStyles();
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            phone: '',
        },
        onSubmit: values => {
            fetch('https://reqres.in/api/users', {
                method: "POST",
                body: JSON.stringify(
                    {
                        firstname: formik.values.firstname,
                        lastname: formik.values.lastname,
                        email: formik.values.email,
                        password: formik.values.password,
                        phone: formik.values.phone,
                    }
                )
            })
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                })
                .catch(error => console.log(error, 'error'))
        }
    });
    return (
            <form onSubmit={formik.handleSubmit}>
                <Box display='flex' justifyContent='space-between' marginTop='50px'>
                    <TextField type="text" name="firstname" id='firstname'  variant="outlined" label="First Name" onChange={formik.handleChange} value={formik.values.firstname} size="small" className={classes.fname}/>
                    <TextField type="text" name="lastname"   id='lastname' variant="outlined" label="Last Name"  size="small" onChange={formik.handleChange} value={formik.values.lastname} className={classes.lname}/>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <TextField type="email" name="email" id='email'  variant="outlined" label="Your Email"  size="small" onChange={formik.handleChange} value={formik.values.email} className={classes.email}/>
                    <TextField type="password" name="password" id='password' variant="outlined" label="Your Password"  size="small" onChange={formik.handleChange} value={formik.values.password} className={classes.pass}/>
                    <Box fontSize='14px' color='#6C757D'><label>At least 8 characters and 1 digit</label></Box>
                    <TextField type="number" name="phone" id='phone' variant="outlined" label="Phone Number"  size="small" onChange={formik.handleChange} value={formik.values.phone} className={classes.phone}/>
                    <Box fontSize='14px' color='#6C757D'><label>Optional - for two step authentication</label></Box>
                </Box>

            <Box marginTop='15px' display='flex' justifyContent='center'>
                <CheckBox label='SUBSCRIBE TO OUR NEWSLETTER' value='subscribe'/>
            </Box>
            <Box textAlign='center' marginTop='15px'>
                <Button type="submit"  variant="contained" className={classes.btn}>Sign Up</Button>
            </Box>
            </form>
    );
};

export default SignUpForm;