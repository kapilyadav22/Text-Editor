import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant = 'h1'> h1 heading</Typography>
        <Typography variant = 'h2'> h2 heading</Typography>
        <Typography variant = 'h3'> h3 heading</Typography>
        <Typography variant = 'h4' gutterBottom> h4 heading</Typography>
        <Typography variant = 'h5'> h5 heading</Typography>
        <Typography variant = 'h6'> h6 heading</Typography>

        <Typography variant = 'subtitle1'> substitle 1 </Typography>
        <Typography variant = 'subtitle2'> subtitle2</Typography>
        //body1 is default
        <Typography variant = 'body1'>lorem jbkhjkhkjhdvklkdfjklvjdflkjvlkdfjvlkjdflkvjldkfjvlkdfjvlkdfjvlkjdfklvjdflkvjdflkvjlkdf</Typography>
        <Typography variant = 'body2'>jksdfkjhsdnkjfhkjsdfhkjsdhfkjsdhfkjhdkjfhdskjfhsdkj</Typography>
    
    </div>
  )
}
