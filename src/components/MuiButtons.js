import React from 'react'
import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material'
import SendIcon from '@mui/icons-material/CancelScheduleSend'
import { FormatBold } from '@mui/icons-material'
import { FormatItalic } from '@mui/icons-material'
import { FormatUnderlined } from '@mui/icons-material'
import { PhotoCamera } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete'
import { LoadingButton } from '@mui/lab'

export const MuiButtons = () => { 
   
  return (
    //Stack is a container component for arranging elements vertically or horizontally.
    <Stack spacing={4}>
        <Stack spacing = {2} direction='row' >

        <Button variant='text' href = 'https://google.com'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>outlined</Button>
        </Stack>

        <Stack spacing = {2} direction='row'>
            <Button variant='contained' color = 'primary'>primary</Button>
            <Button variant='contained' color = 'secondary'>secondary</Button>
            <Button variant='contained' color = 'error'>error</Button>
            <Button variant='contained' color = 'warning'>warning</Button>
            <Button variant='contained' color = 'info'>info</Button>
            <Button variant='contained' color = 'success'>success</Button>
        </Stack>
        <Stack spacing = {2} direction='row'>
            <Button variant='text' color = 'primary'>primary</Button>
            <Button variant='text' color = 'secondary'>secondary</Button>
            <Button variant='text' color = 'error'>error</Button>
            <Button variant='text' color = 'warning'>warning</Button>
            <Button variant='text' color = 'info'>info</Button>
            <Button variant='text' color = 'success'>success</Button>
        </Stack>
        <Stack spacing = {2} direction='row'>
            <Button variant='outlined' color = 'primary'>primary</Button>
            <Button variant='outlined' color = 'secondary'>secondary</Button>
            <Button variant='outlined' color = 'error'>error</Button>
            <Button variant='outlined' color = 'warning'>warning</Button>
            <Button variant='outlined' color = 'info'>info</Button>
            <Button variant='outlined' color = 'success'>success</Button>
        </Stack>
    
        <Stack display='block' spacing ={2} direction='row'>
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
        </Stack>

        <Stack spacing ={2} direction='row'>
  
        {/*  icon buttons with size
         */}
        <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="inherit" />
        </IconButton>
        <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="delete" size="large">
        <DeleteIcon />
        </IconButton>
        <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
        </IconButton>
                   
        </Stack>


        <Stack spacing={2} direction='row'>
           {/* disableelevation to remove shadow and elevation 
                disableripple prop to remove effect on click
           */}
            <Button variant='contained' startIcon={<SendIcon />} disableElevation disableRipple>Send</Button>
            <Button variant='contained' endIcon={<SendIcon />} onClick={()=> alert('Clicked')}>Send</Button>

            <IconButton aria-label='send' color='success' size='small'><SendIcon fontSize="inherit"/></IconButton>
        </Stack>

        <Stack direction='row'>
            <ButtonGroup 
                variant = 'contained'
                orientation='vertical' 
                size='small' 
                color='secondary'
                aria-label='alignment button group'>            
            <Button  onClick={()=>alert("left clicked")}>Left</Button>
            <Button  onClick={()=>alert("Centre clicked")}>Centre</Button>
            <Button  onClick={()=>alert("Rightclicked")}>Right</Button>
            </ButtonGroup>
           {/* togglebutton can be used to group related options*/}
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup 
            aria-label='text formatting'>
                <ToggleButton value='bold' aria-label='bold'><FormatBold/></ToggleButton>
                <ToggleButton value='italic' aria-label='italic'><FormatItalic/></ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlined/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>

        <Button variant="contained" 
        component="label">Upload
        <input hidden accept="image/*" multiple type="file" />
        </Button>

        <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
        </IconButton>

        <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
  Fetch data
</LoadingButton>


    </Stack>

    
    


  )
}
