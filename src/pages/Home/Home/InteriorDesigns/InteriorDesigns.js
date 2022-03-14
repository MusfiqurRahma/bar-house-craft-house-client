import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import InteriorDesign from '../InteriorDesign/InteriorDesign';


const InteriorDesigns = () => {
    const [interiorDesigns, setInteriorDesigns] = useState([]);
    
    useEffect(() => {
        fetch('https://stormy-wave-87937.herokuapp.com/interiorDesign')
            .then(res => res.json())
            .then(data => setInteriorDesigns(data));
    },[])

    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ flexGrow: 1,p:5,mt:5}}>
                <h2 style={{fontFamily: 'Playfair Display, sans-serif',paddingBottom:'25px',fontWeight:'900'}}>Our Available Interior Products</h2>
            <Grid container spacing={2}>
                {
                    interiorDesigns.map(interiorDesign => <InteriorDesign
                        interiorDesign={interiorDesign}
                        key={interiorDesign.img}></InteriorDesign>)
                }
            </Grid>
            </Container>
          <Footer></Footer>
        </div>
    );
};

export default InteriorDesigns;