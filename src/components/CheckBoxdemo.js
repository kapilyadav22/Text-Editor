import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Stack } from '@mui/material';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <Stack>
       <Stack spacing = {2} dimension='row'>
       <Checkbox {...label} defaultChecked></Checkbox>
      <Checkbox {...label} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }}}/>
      <Checkbox {...label} defaultChecked sx={{ '& .MuiSvgIcon-root': { fontSize: 45  }}}/>
      <Checkbox {...label} />
      <Checkbox {...label} disabled />
      <Checkbox {...label} disabled checked />
       </Stack>
      
       <Stack spacing = {2} direction='row'>
      <Checkbox {...label} defaultChecked />
<Checkbox {...label} defaultChecked color="secondary" />
<Checkbox {...label} defaultChecked color="success" />
<Checkbox {...label} defaultChecked color="default" />
<Checkbox
  {...label}
  defaultChecked
  sx={{
    color: pink[800],
    '&.Mui-checked': {
      color: pink[600],
    },
  }}
/></Stack>

<Stack dimension='row'>
<Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
</Stack>


    </Stack>
  );
}
