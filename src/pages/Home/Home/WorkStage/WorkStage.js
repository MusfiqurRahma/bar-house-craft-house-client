import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import imgHouse from '../../../../image/image-house.png';
import stageman from '../../../../image/stages-man.png';

const WorkStage = () => {
    return (
        <Container sx={{mt:8,p:5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                    <Typography variant='h4'
                        sx={{
                            color: '#544438',
                            fontWeight: '900',
                            fontSize:'40px',
                            fontFamily: 'Playfair Display, sans-serif', 
                        }}>Stages of <span
                            style={{ color: '#e1c265' }}>Our Work</span>
                    </Typography>
                    <Typography variant='h6'
                        sx={{ color: '#544438'}}>We select the most high-quality wood materials, which have a very long life in any climatic conditions..
                    </Typography>
                    <Button>Order Now</Button>
                </Grid>
            <Grid item xs={12} md={4}>
                    <img
                        height='100%'
                        width='auto'
                        src={imgHouse}
                        alt="" />
           </Grid>
           <Grid item xs={12} md={4}>
                    <img
                        width='90%'
                        style={{marginTop:'18%',marginLeft:'60px'}}
                        src={stageman}
                        alt="" />
           </Grid>
            </Grid>
        </Container>
    );
};

export default WorkStage;