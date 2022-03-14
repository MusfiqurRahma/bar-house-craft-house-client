import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import productsBg from '../../../../image/products-bg-2.jpg';


const style = {
    background: `url(${productsBg}),linear-gradient(#43657a,#a4a7ab)`,
    backgroundSize: 'cover',
    backgroundBlendMode:'overlay'
}

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://stormy-wave-87937.herokuapp.com/addReviews')
            .then(res => res.json())
            .then(data=>setReviews(data))
    },[])
    return (
        <div style={style}>
            <Typography variant='h6' sx={{pt:3,color:'#e1c265',fontSize:'25px'}}>Feedback</Typography> <hr />
            <Typography variant='h3' sx={{color:'#e1c265',fontWeight:'900'}}>A few words from our Happy Clients</Typography>
            <Container sx={{p:8}}>
            <Grid container spacing={2}>
             {
                    reviews.map(review => <Review
                        review={review}
                    key={review._id}></Review>)
             }
            </Grid>
        </Container>
        </div>
    );
};

export default Reviews;