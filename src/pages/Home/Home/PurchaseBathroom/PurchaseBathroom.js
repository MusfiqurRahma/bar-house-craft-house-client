import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';


const PurchaseBathroom = () => {
    const {bathroomId } = useParams();
    const [purchase, setPurchase] = useState({});
    // console.log(purchase);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://stormy-wave-87937.herokuapp.com/purchaseBathroom/${bathroomId}`)
            .then(res => res.json())
            .then(data=>setPurchase(data[0]))
    }, [bathroomId])
  
      const { register, handleSubmit} = useForm();
      const onSubmit = data => {
           fetch("https://stormy-wave-87937.herokuapp.com/confirmOrder", {
                 method: "POST",
                 headers: { "content-type": "application/json" },
                 body: JSON.stringify(data),
             })
                 .then((res) => res.json())
                 .then((data) => {
                   if (data.insertedId) {
                    Swal.fire({
                      title: 'Successfully Order Completed',
                      showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    })
                    //  console.log(data);
                   }
                 });                
};
    return (
        <Container sx={{ flexGrow: 1,mt:5 }}>
         <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="250"
        image={purchase?.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {purchase?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {purchase?.desc}
        </Typography>
      </CardContent>
    <CardActions>              
      <Button size="large">Net Price: {purchase?.price}</Button>   
      </CardActions>
        </Card>
                    
          </Grid>
         <Grid item xs={12} md={6}>           
            <form onSubmit={handleSubmit(onSubmit)} style={{
              display: "flex",
              flexDirection: 'column',
              width: '40%',
              margin: 'auto'
            }}>
            <input
                {...register("name")}
                defaultValue={purchase?.name}
                style={{
                  width: '180%',
                  padding: '15px',
                  margin: '5px',
                  borderRadius: '5px',
                  border:'1px solid #f5831b'
                }}
              />
                
              <input
                {...register("Name")}
                 placeholder="Your Name"
                style={{
                  width: '180%',
                  padding: '15px',
                  margin: '5px',
                  borderRadius: '5px',
                  border:'1px solid #f5831b'
                }}
                defaultValue={user?.displayName}            
              />
                <input
              {...register("Email")}
                placeholder="Email"
                style={{
                  width: '180%',
                  padding: '15px',
                  margin: '5px',
                  borderRadius: '5px',
                  border:'1px solid #f5831b'
                }}
                type="email"
                defaultValue={user?.email}     
              />
                
              <input
                {...register("Address")}
                 placeholder="Address"
                style={{
                  width: '180%',
                  padding: '15px',
                  margin: '5px',
                  borderRadius: '5px',
                  border:'1px solid #f5831b'
                }}          
              />
                 <input
                {...register("date")}
                type="date"
                style={{
                  width: '180%',
                  padding: '15px',
                  margin: '5px',
                  borderRadius: '5px',
                  border:'1px solid #f5831b'
                }}            
              />
               <input
                {...register("number", { required: true })}
                style={{
                  width: '180%',
                  padding: '15px',
                  margin: '5px',
                  borderRadius: '5px',
                  border:'1px solid #f5831b'
                }}
                type="number"
                placeholder='Phone Number'
              />
               <input
                {...register("price", { required: true })}
                style={{
                  width: '180%',
                  padding: '15px',
                  margin: '5px',
                  borderRadius: '5px',
                  border:'1px solid #f5831b'
                }}
                type="number"
                defaultValue={purchase?.price}
                placeholder='Discount Price'
              />
               <input
                {...register("image", { required: true })}
                 defaultValue={purchase?.img}
                style={{
                  width: '180%',
                  padding: '15px',
                  margin: '5px',
                  borderRadius: '5px',
                  border:'1px solid #f5831b'
                }}
                placeholder="Image"
              />
                <input
                style={{
                  width: '180%',
                  padding: '5px',
                  margin: '5px',
                  borderRadius: '5px',
                  fontSize: '20px',
                  backgroundColor: '#f5831b',
                  color: 'white',
                  border:'1px solid #f5831b'
                }}
                type="submit"
                value="Order Here"
              />
            </form>
         </Grid>
        </Grid>
      </Container>
    );
};

export default PurchaseBathroom;