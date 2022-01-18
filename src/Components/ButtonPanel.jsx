import { Box, Button, Grid, useTheme } from '@mui/material';
import React from 'react';
import PanoramaFishEye from '@mui/icons-material/PanoramaFishEye';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';
import Close from '@mui/icons-material/Close';
import Audiotrack from '@mui/icons-material/Audiotrack';
import BlurOn from '@mui/icons-material/BlurOn';
import Carpenter from '@mui/icons-material/Carpenter';
import ChatBubble from '@mui/icons-material/ChatBubble';
import ContactSupport from '@mui/icons-material/ContactSupport';
import Looks1 from '@mui/icons-material/LooksOne';
import { makeStyles } from '@mui/styles';

const styles = makeStyles((theme) => ({
  buttons: {
    borderRadius: theme.spacing(2),
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    color: theme.palette.text.primary,
  }

}));

const StyledButton = ({icon}, classes) => {
  return (
  <Button variant="outlined" className={classes.button} color="secondary">
    {icon}
  </Button>
  )
}


const ButtonPanel = () => {
  const theme = useTheme();
  const classes = styles(theme);
  

  return (
    <Box className={classes.buttons}>
      <Grid
        container spacing={2} alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <Grid item xs={4}>
          <StyledButton classes={classes} icon={<Looks1/>} />
          {/*<Button variant="outlined" className={classes.button} color="secondary">
            <Looks1 />
          </Button>
  */}
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="secondary">
            <PanoramaFishEye />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="secondary">
            <Audiotrack />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="secondary">
            <CatchingPokemon />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="secondary">
            <BlurOn />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="secondary">
            <Close />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="secondary">
            <Carpenter />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="secondary">
            <ChatBubble />
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined" color="secondary">
            <ContactSupport />
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ButtonPanel;