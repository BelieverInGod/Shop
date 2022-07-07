import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchInput() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={IphonModel}
      sx={{ width: 300 ,  position: 'relative' , left: '-200px', top: '35px'}}
      renderInput={(params) => <TextField {...params} label="Search Model" sx={{ width: 300 , background: 'white'}}/>}
    />
  );
}

const IphonModel = [
    { label: '6'},
    { label: '6s'},
    { label: '7'},
    { label: 'se'},
    { label: '8'},
    { label: 'x'},
    { label: 'xs'},
    { label: 'xs max'},
    { label: 'xr'},
    { label: '11'},
    { label: '11 pro'},
    { label: '11 pro max'},
    { label: '12'},
    { label: '12 pro'},
    { label: '12 pro max'},
    { label: '13'},
    { label: '13 pro'},
    { label: '13 pro max'},
]