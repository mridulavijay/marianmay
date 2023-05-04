import { Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Addemp = () => {
    const { register,handleSubmit} = useForm();
   const getVal=(val)=>{
        alert('Form submitted');
        axios.post('https://reqres.in/api/users',val).then((res)=>{
            alert(`The data is posted with id ${res.data.id}`)
        })
    }
  return (
    <div>
        <Stack
      component="form"
      sx={{
        marginTop:'40px',
        marginLeft:'45%',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        name='empname'
        {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Employee Name"
        variant="outlined"
        
      />
      <TextField
        hiddenLabel
        name='emplocation'
        {...register('emplocation')}
        id="filled-hidden-label-normal"
        defaultValue="Employee Location"
        variant="outlined"
      />
      <TextField
        hiddenLabel
        name='empdesignation'
        {...register('empdesignation')}
        id="filled-hidden-label-normal"
        defaultValue="Employee Designation"
        variant="outlined"
      />
    <Button onClick={handleSubmit(getVal)} variant='contained'>Submit</Button>
    </Stack>
    </div>
  )
}

export default Addemp