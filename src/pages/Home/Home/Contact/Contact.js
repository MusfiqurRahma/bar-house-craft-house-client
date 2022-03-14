import { Button,Grid, Typography } from '@mui/material';
import React from 'react';
import iconPhone from '../../../../image/icon-img/icon-phone.png';

const Contact = () => {
    return (
        <div style={{
            backgroundColor: '#e1c265',
            padding: '5%'
        }}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                    <Typography variant='h5' sx={{
                        color: 'white',
                        fontWeight: '800',
                        fontFamily: 'Playfair Display, sans-serif', 
                    }}>24/7 Call Center</Typography>
                    <Typography variant='h4' sx={{
                        color: '#544438',
                        fontWeight: '900',
                        fontFamily: 'Playfair Display, sans-serif', 
                    }}>Need a consultation?</Typography>
            </Grid>
          <Grid item xs={12} md={4} sx={{display:'flex'}}>
                    <img src={iconPhone} alt="" />
                    <Typography variant='h3' sx={{
                        color: 'white',
                        fontWeight: '900',
                        fontFamily: 'Playfair Display, sans-serif', 
                    }}>+8801700000000</Typography>
            </Grid>
          <Grid item xs={12} md={4}>
          <Button variant='contained' size="large" sx={{backgroundColor:'#544438',mt:2}}>
            Contact Us
        </Button>
            </Grid>
            </Grid>
        </div>
    );
};

export default Contact;