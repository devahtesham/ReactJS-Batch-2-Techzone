import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./InputBox.css"
function InputBox(props) {
  return (
    <Box
      component="form"
      sx={{
        width:'100%'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField type={props.type} id="outlined-basic" label={props.label} variant="outlined" sx={{fontSize:'20px',font:'unset',width:'100%',marginBottom:2}}/>
    </Box>
  );
}

export default InputBox