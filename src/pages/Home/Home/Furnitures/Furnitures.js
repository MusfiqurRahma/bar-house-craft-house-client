import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Furniture from '../Furniture/Furniture';

const Furnitures = () => {
    const [furnitures, setFurnitures] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addFurniture')
            .then(res => res.json())
            .then(data => setFurnitures(data));
    },[])

    return (
        <div>
             <Navigation></Navigation>
         <Container sx={{ flexGrow: 1,p:5,mt:5}}>
         <Typography variant='h3' sx={{mb:6,fontWeight:900}}>Our available Furnitures</Typography>
        <Grid container spacing={2}>
            {
                furnitures.map(furniture => <Furniture
                    furniture={furniture}
                    key={furniture.img}></Furniture>)
            }
        </Grid>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Furnitures;