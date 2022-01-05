import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import SolarEnergy from '../SolarEnergy/SolarEnergy';

const SolarEnergies = () => {
    const [solarEnergies, setsolarEnergies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/solarEnergy')
            .then(res => res.json())
            .then(data => setsolarEnergies(data));
    },[])
    return (
        <div>
        <Navigation></Navigation>
         <Container sx={{ flexGrow: 1,p:5,mt:5}}>
         <Typography variant='h3' sx={{mb:6,fontWeight:900}}>Our available Solar Energy Products</Typography>
        <Grid container spacing={2}>
            {
                solarEnergies.map(solar => <SolarEnergy
                    solar={solar}
                    key={solar.img}></SolarEnergy>)
            }
        </Grid>
        </Container>
        <Footer></Footer>
    </div>
    );
};

export default SolarEnergies;