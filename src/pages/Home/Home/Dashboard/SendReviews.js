import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
// import productsBg from '../../../../../image/addProducts-bg.jpg';


const style = {
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    marginTop:'2%'
}
// const style2 = {
//     background: `url(${})`,
//     backgroundSize: 'cover',
//     height:'100vh'
// }

const SendReviews = () => {
    const {user}=useAuth()
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        fetch('https://stormy-wave-87937.herokuapp.com/addReviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Successfully Added Reviews')
                    reset()
                }
            })
   };
    return (
            <div>
            <Typography variant='h3' sx={{fontWeight:'900'}}>
            You can review the products if you want !!!
            </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection:'column',width:'40%',margin:'auto'}}>
                <input {...register("name")}
                    style={style}
                    placeholder='Name'
                    defaultValue={user.displayName}
                />
                <input {...register("profession")}
                    style={style}
                    placeholder='Profession'
                />
                
                <textarea {...register("description")}
                    style={style}
                    placeholder='Description'
                />
                <input
                {...register("date")}
                    type="date"
                    style={style}
                />
                <input type="number" {...register("rating")}
                    style={style}
                    placeholder='Rating'
                />
                <input type="imageUrl" {...register("image")}
                    style={style}
                    placeholder='Image'
                    defaultValue={user.photoURL}
                />
                <input type="submit"
                    style={style} />
            </form>
     </div>
    );
};

export default SendReviews;