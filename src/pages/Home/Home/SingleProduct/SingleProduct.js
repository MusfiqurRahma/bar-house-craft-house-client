import { Avatar, Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const { name, description, image, price, discountPrice, _id } = props.product;
    return (
        <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{p:6}}>
            <Avatar
              alt="Remy Sharp"
              src={image}
              sx={{ width: 200, height: 200,m:'auto'}}
             />
                <Typography variant='h5'
                    sx={{
                        fontWeight: '900',
                        color: '#574437'
                    }}>
                    {name}
                </Typography> <hr />
                
                <Typography variant='body2'
                    sx={{ color: '#9c5938' }}>
                    {description.slice(0, 300)}
                    ..<italic style={{color:'red'}}>Read More</italic>
                </Typography>
                
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-evenly'
                }}>
                    <Typography variant='h5'>
                        <s style={{
                                 fontWeight: '900',
                                 color: '#99402c'
                                }}>${price}</s>
                    </Typography>
                    
                    <Typography variant='h5'
                        sx={{
                            fontWeight: '900',
                            color: '#99402c'}}>
                    ${discountPrice}
                    </Typography>
                    
                </div>
                <Link to={`/purchaseProducts/${_id}`} style={{textDecoration:'none'}}>
                <Button
                    variant='contained'
                    sx={{ backgroundColor: '#574437'}}>Purchase Now</Button>
                </Link>
         </Paper>
    </Grid>
    );
};

export default SingleProduct;