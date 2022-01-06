import useAuth from '../../../../hooks/useAuth';
import loginBanner from '../../../../../image/login.jpg';
import { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import Navigation from '../../../../Shared/Navigation/Navigation';
import Footer from '../../../../Shared/Footer/Footer';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
       <><Navigation></Navigation><Container>
        <Grid container spacing={2}>
            <Grid item sx={{ mt: 8 }} xs={12} md={6}  style={{border:'1px solid gray',marginTop:'50px',backgroundColor:'#e1c265',color:'#14539a',padding:'20px',marginBottom:'30px'}}>
                <Typography variant="h4" gutterBottom>Please Login</Typography> <hr />
                <form onSubmit={handleLoginSubmit}>
                    <TextField
                        style={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" /> <br />
                    <TextField
                        style={{ width: '75%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" /> <br /> <br /> 

                    <Button style={{ width: '75%', m: 1,backgroundColor:'#17a4be'}} type="submit" variant="contained">Login</Button> <br /><br />
                    <NavLink
                        style={{ textDecoration: 'none' }}
                        to="/register">
                        <Button variant="text">New to Barhouse? Please Click SignUp</Button>
                    </NavLink>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success"> Successfully Login!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>
                <p>------------OR-------------</p>
                <Button onClick={handleGoogleSignIn} variant="contained" sx={{backgroundColor:'#17a4be'}}>Continue With Google</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{ width: '100%' }} src={loginBanner} alt="" />
            </Grid>
        </Grid>
        </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;