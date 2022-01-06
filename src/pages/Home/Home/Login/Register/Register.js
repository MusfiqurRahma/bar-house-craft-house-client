import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Navigation from '../../../../Shared/Navigation/Navigation';
import RegisterBanner from '../../../../../image/register.jpg';
import Footer from '../../../../Shared/Footer/Footer';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    return (
        <>
            <Navigation></Navigation>
            <Container>
            <Grid container spacing={2} sx={{ mt: 10 }}>
                <Grid item xs={12} md={6}  style={{border:'1px solid gray',marginTop:'50px',backgroundColor:'#e1c265',color:'white',marginBottom:'40px'}}>
                    <Typography variant="h4" gutterBottom>Please create an account</Typography> <hr />
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            style={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onBlur={handleOnBlur}
                            variant="standard" /> <br />
                        <TextField
                            style={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" /> <br />
                        <TextField
                            style={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" /> <br />
                        <TextField
                            style={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur} 
                            variant="standard" /> <br /> <br />

                        <Button style={{ width: '75%', m: 1 }} type="submit" variant="contained" sx={{backgroundColor:'#17a4be'}}>Register</Button> <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%',marginTop:'5%' }} src={RegisterBanner} alt="" />
                </Grid>
            </Grid>
            </Container>
            <Footer></Footer>
            </>
    );
};

export default Register;