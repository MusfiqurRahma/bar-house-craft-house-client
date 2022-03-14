import {Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import EcoMaterial from '../EcoMaterial/EcoMaterial';

const EcoMaterials = () => {
    const [ecos, setEcos] = useState([]);

    useEffect(() => {
        fetch('https://stormy-wave-87937.herokuapp.com/ecoMaterial')
            .then(res => res.json())
            .then(data => setEcos(data));
    },[])
    return (
        <div>
        <Navigation></Navigation>
         <Container sx={{ flexGrow: 1,p:5,mt:5}}>
         <Typography variant='h3' sx={{mb:6,fontWeight:900,fontFamily: 'Playfair Display, sans-serif'}}>Our available Eco Materials Products</Typography>
        <Grid container spacing={2}>
            {
                ecos.map(eco => <EcoMaterial
                    eco={eco}
                    key={eco.img}></EcoMaterial>)
            }
        </Grid>
        </Container>
        <Footer></Footer>
    </div>
    );
};

export default EcoMaterials;