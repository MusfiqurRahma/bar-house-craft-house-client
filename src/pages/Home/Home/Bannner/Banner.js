import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import BannerImage from '../../../../image/house-g737061b63_1281.jpg';
import bg from '../../../../image/wood-g8358d2b1b_1280.jpg';
import offers1 from '../../../../image/icon-img/service-icon-1.png';
import offers2 from '../../../../image/icon-img/service-icon-2.png';
import offers3 from '../../../../image/icon-img/service-icon-3.png';
import offers4 from '../../../../image/icon-img/service-icon-4.png';
import offers5 from '../../../../image/icon-img/service-icon-5.png';
import offers6 from '../../../../image/icon-img/service-icon-6.png';
import { Link } from 'react-router-dom';

const style = {
      backgroundImage: `url(${bg})`,
      backgroundAttachment: 'fixed',
      backgroundSize:'cover'
}

const Banner = () => {
    return (
          <>  <Grid container spacing={2} sx={{
                backgroundColor: 'gray',
                p: 10, mt: 0
          }} style={style}>
                <Grid item xs={12}
                      md={6}
                      sx={{ mt: 5 }}>
                      <Typography variant='h3'
                            style={{ fontWeight: '800', fontFamily: 'Playfair Display, sans-serif',  }}>
                            <span
                                  style={{
                                        color: '#010101',
                                        fontWeight: '900',
                                        fontSize: '80px',
                                        fontFamily: 'Playfair Display, sans-serif', 
                                  }}>Craft</span> <br /> Wooden Houses
         </Typography>
                      <Typography variant='h6' sx={{
                            fontFamily: 'Playfair Display, sans-serif',
                            fontWeight: '600'
                      }}>
             We are always ready to deliver quality
             wooden house to you.
         </Typography>
                      <Link to='/explores' style={{ textDecoration: 'none' }}> <Button sx={{
                            color: 'white',
                            mt: 3,
                            backgroundColor: '#e1c265'
                      }} variant="outlined" size="large">
          Explore More
        </Button>
        </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <img height='100%' width='100%' style={{borderRadius:'10px'}} src={BannerImage} alt="" />
         </Grid>
      </Grid>
      <Grid container spacing={2} sx={{backgroundColor:'#1f1a17'}}>
      <Grid item xs={12} md={2}>
            <img src={offers1} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Eco Materials</Typography>
                            <Link style={{textDecoration: 'none'}} to='/ecomaterials'> <Button sx={{
                                  backgroundColor: '#e1c265',
                                  color: 'white',
                                  border: 'solid 1px #e1c265',
                                  marginY: 3,
                                  textDecoration: 'none'
                            }}>Available Items</Button></Link>
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers2} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Solar Energy</Typography>
                            <Link style={{textDecoration: 'none'}} to='/solarenergy'><Button sx={{
                                  backgroundColor: '#e1c265',
                                  color: 'white',
                                  border: 'solid 1px #e1c265',
                                  marginY: 5,
                            }}>Available Items</Button></Link>
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers3} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Furniture</Typography>
                            <Link style={{ textDecoration: 'none' }} to='/furniture'><Button sx={{
                                  backgroundColor: '#e1c265',
                                  color: 'white',
                                  border: 'solid 1px #e1c265',
                                  marginY: 3, textDecoration: 'none'
                            }}>Available Items</Button></Link>
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers4} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Bathroom Feetings</Typography>
                            <Link style={{ textDecoration: 'none' }} to='/bathroomfeetings'><Button sx={{
                                  backgroundColor: '#e1c265',
                                  color: 'white',
                                  border: 'solid 1px #e1c265',
                                  marginY: 3,
                                  textDecoration: 'none'
                            }}>Available Items</Button></Link>
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers5} alt="" /> <br />
            <Typography variant='h6' sx={{ color: 'white' }}>CCTV Reply</Typography> <br/>
                            <Link style={{textDecoration: 'none'}} to='/cctv'><Button sx={{
                                  backgroundColor: '#e1c265', color: 'white',
                                  border: 'solid 1px #e1c265',
                                  marginY: 3,
                                  textDecoration: 'none'
                            }}>Available Items</Button></Link>
      </Grid>
      <Grid item xs={12} md={2}>
            <img src={offers6} alt="" />
            <Typography variant='h6' sx={{ color: 'white' }}>Interior Design</Typography>
                            <Link style={{textDecoration: 'none'}} to='/interior'><Button sx={{
                                  backgroundColor: '#e1c265',
                                  color: 'white',
                                  border: 'solid 1px #e1c265',
                                  marginY: 3,
                                  textDecoration: 'none'
                            }}>Available Items</Button></Link>
       </Grid>
       </Grid> </>
    );
};
export default Banner;