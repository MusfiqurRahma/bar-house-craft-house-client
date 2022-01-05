import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import BathroomFeeting from '../BathroomFeeting/BathroomFeeting';

const BathroomFeetings = () => {
    const [bathroomFeetings, setbathroomFetings] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/bathroomFeetings')
            .then(res => res.json())
            .then(data => setbathroomFetings(data));
    }, []);

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ flexGrow: 1,p:5,mt:5}}>
            <h2>Our Available Bathroom Feetings Services</h2>
            <Grid container spacing={2}>
                {
                    bathroomFeetings.map(bathroomFeeting => <BathroomFeeting
                    bathroomFeeting={bathroomFeeting}
                    key={bathroomFeeting.img}></BathroomFeeting>)
                }
            </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default BathroomFeetings;