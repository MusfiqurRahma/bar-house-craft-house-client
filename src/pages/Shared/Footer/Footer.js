import { Button, Grid, List, ListItemText, Typography } from '@mui/material';
import React from 'react';
import footerLogo from '../../../image/tree-ring_JAVSJPT33J.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcCallTwoToneIcon from '@mui/icons-material/AddIcCallTwoTone';
import AttachEmailTwoToneIcon from '@mui/icons-material/AttachEmailTwoTone';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import { Box } from '@mui/system';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';


const style = {
    background: `url(${footerLogo}),linear-gradient(#1d1815,#1d1815)`,
    backgroundBlendMode: 'overlay',
    backgroundRepeat: 'no-repeat',
    backgroundSize:'cover'
}

const Footer = () => {
    return (
     <>  <Grid container spacing={2} sx={style} style={{padding:'5%'}}>
            <Grid item xs={12} md={3}>
            <img
            style={{ backgroundColor: '#e1c265',padding:'10px'}}
            src="https://i.ibb.co/B3nYkvY/logo-small.png"
            alt="" />
                <Typography variant='body1' sx={{ color: '#e1c265', fontFamily: 'Playfair Display, sans-serif',}}>We have over 10 years of experience, We take pride in delivering Intelligent Designs for clients all over the World.</Typography>
         <Button style={{color:'#e1c265'}}>Subscribe Us</Button>        
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h4' sx={{color:'#e1c265',fontWeight:'800',fontFamily: 'Playfair Display, sans-serif', }}>
               Services         
                </Typography> <hr/>
                <List sx={{color:'#e1c265' }}>
                    <ListItemText style={{ fontFamily: 'Playfair Display, sans-serif', }}>All Services</ListItemText>
                    <ListItemText sx={{ fontFamily: 'Playfair Display, sans-serif', }}>General Carpentry</ListItemText>
                    <ListItemText>Manufacturer Furniture</ListItemText>
                    <ListItemText>Hang Paintings</ListItemText>
                    <ListItemText>Commercial Work</ListItemText>
                    <ListItemText>Furniture Design</ListItemText>
                </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h4' sx={{
            color: '#e1c265',
            fontWeight: '800',
            fontFamily: 'Playfair Display, sans-serif'
          }}>
               Contact Us         
                </Typography> <hr />
                <List sx={{color:'#e1c265'}}>
                    <ListItemText> <LocationOnIcon /> Dhanmondi 32,Dhaka City,Bangladesh</ListItemText>
                    <ListItemText> <AddIcCallTwoToneIcon /> +8801700000000; +01209090</ListItemText>
                    <ListItemText><AttachEmailTwoToneIcon/> barhouse@gmail.com</ListItemText>
                    <ListItemText><FacebookTwoToneIcon/> barhouse</ListItemText>
                </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant='h4' sx={{
            color: '#e1c265',
            fontWeight: '800',
            fontFamily: 'Playfair Display, sans-serif', 
          }}>
               Newsletter        
                </Typography> <hr />
          <Typography variant='body1' sx={{
            color: '#e1c265',
            fontFamily: 'Playfair Display, sans-serif',
          }}>
        Stay up to date. Follow our latest news, Carpentry tips and special offers.        
                </Typography>
                <Box sx={{ '& > :not(style)': { m: 1,backgroundColor:'#e1c265' } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Your Email
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="right">
              <SendIcon />
            </InputAdornment>
            }
           />
          </FormControl>    
                </Box>
                <FacebookIcon sx={{fontSize:'40px',color:'#4064ac'}}/>
                <TwitterIcon sx={{ fontSize: '40px', color: '#1c9cea' }}/>
                <LinkedInIcon sx={{ fontSize: '40px', color: '#0074af' }}/>
                <WhatsAppIcon sx={{ fontSize: '40px', color: '#41d251' }}/>
                <InstagramIcon sx={{ fontSize: '40px', color: '#e46737' }}/>
            </Grid>
        </Grid>
        <Box>
          <Typography sx={{
            backgroundColor: '#1d1815',
            color: 'white',
            padding: '10px',
            fontFamily: 'Playfair Display SC, serif'
          }}>&copy;2021 ~ @Bar-House || Designed & Developed &hearts; By Musfiqur Rohoman</Typography>
        </Box> </>
    );
};
export default Footer;