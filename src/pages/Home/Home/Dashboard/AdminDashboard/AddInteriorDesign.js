import { Typography } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';



const style = {
    margin: '10px',
    padding: '10px',
    borderRadius: '10px',
    marginTop:'2%'
}

const AddInteriorDesign = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        fetch('https://stormy-wave-87937.herokuapp.com/interiorDesign', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire(
                        'Successfully Added Product',
                      )
                    reset()
                }
            })
   };
    return (
        <div>
        <Typography variant='h3' sx={{fontWeight:'900'}}>
            Add Interior Products..!!
        </Typography>
  <form onSubmit={handleSubmit(onSubmit)} style={{display:"flex",flexDirection:'column',width:'40%',margin:'auto'}}>
            <input {...register("name")}
                style={style}
                placeholder='Products Name'
            />
            
            <textarea {...register("desc")}
                style={style}
                placeholder='Products Description'
            />
            <input type="number" {...register("price")}
                style={style}
                placeholder='Products Price'
            />
            <input type="text" {...register("duration")}
                style={style}
                placeholder='Duration'
            />
            <input type="imageUrl" {...register("img")}
                style={style}
                placeholder='Products Image'
            />
            <input type="submit"
                style={style} />
        </form>
    </div>
    );
};

export default AddInteriorDesign;