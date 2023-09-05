import React from 'react'
import { AppBar,Toolbar,IconButton,Typography,Stack, Button} from '@mui/material'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';




const MuiNavBar = () => {
  return (
    <AppBar position='static'>
        <Toolbar>
            <IconButton size='large' edge='start'color='inherit' aria-label='logo'>
               <MobileFriendlyIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow:1}}> Mobile Mania </Typography>
            <Stack direction='row' spacing={2}>
            <Button color='inherit'>Home</Button>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Register</Button>
            <Button color='inherit'>Login</Button>
        </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavBar