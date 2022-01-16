
import './App.css';
import { Button, Grid } from '@mui/material';
import { Joystick } from 'react-joystick-component';
import PanoramaFishEye from '@mui/icons-material/PanoramaFishEye';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';
import Close from '@mui/icons-material/Close';
import Audiotrack from '@mui/icons-material/Audiotrack';
import BlurOn from '@mui/icons-material/BlurOn';
import Carpenter from '@mui/icons-material/Carpenter';
import ChatBubble from '@mui/icons-material/ChatBubble';
import ContactSupport from '@mui/icons-material/ContactSupport';
import Looks1 from '@mui/icons-material/LooksOne';


import { Box } from '@mui/system';



function App() {

  const started = () => {
    console.log('started');
  }

  const stopped = () => {
    console.log('stopped');
  }

  const moved = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <Grid
        container spacing={2}
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <Grid item xs={12} className='halfPanel'>
          <img src="https://source.unsplash.com/random/640x480" height="100%" alt="background" />
        </Grid>
        <Grid item xs={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="200px"
            className='halfPanel'
          >
            <Joystick
              start={started}
              throttle={200}
              move={(e) => moved(e)}
              stop={stopped} />
          </Box>
        </Grid>
        <Grid item xs={6} >
          <Grid container spacing={2} alignItems="center"
            justifyContent="center"
            direction="row"
            className='halfPanel'
          >
            <Box>
              <Grid
                container spacing={2} alignItems="center"
                justifyContent="center"
                direction="row"
              >
                <Grid item xs={4}>
                  <Button variant="outlined" color="primary">
                    <Looks1 />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" color="primary">
                    <PanoramaFishEye />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" color="primary">
                    <Audiotrack />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" color="primary">
                    <CatchingPokemon />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" color="primary">
                    <BlurOn />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" color="primary">
                    <Close />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" color="primary">
                    <Carpenter />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" color="primary">
                    <ChatBubble />
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button variant="outlined" color="primary">
                    <ContactSupport />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
