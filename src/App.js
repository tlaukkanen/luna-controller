
import './App.css';
import { Button, Grid, IconButton, Table, TableBody, TableCell, TableRow } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowForward from '@mui/icons-material/ArrowForward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import StopCircle from '@mui/icons-material/StopCircle';
import { Joystick } from 'react-joystick-component';
import PanoramaFishEye from '@mui/icons-material/PanoramaFishEye';
import PhoneInTalk from '@mui/icons-material/PhoneInTalk';
import CatchingPokemon from '@mui/icons-material/CatchingPokemon';
import Close from '@mui/icons-material/Close';
import Audiotrack from '@mui/icons-material/Audiotrack';
import BlurOn from '@mui/icons-material/BlurOn';
import Carpenter from '@mui/icons-material/Carpenter';
import ChatBubble from '@mui/icons-material/ChatBubble';
import ContactSupport from '@mui/icons-material/ContactSupport';
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
        <Grid item xs={12}>
          <img src="https://source.unsplash.com/random/640x480" alt="background" />
        </Grid>
        <Grid item xs={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="200px"
          >
            <Joystick
              start={started}
              throttle={200}
              move={(e) => moved(e)}
              stop={stopped} />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} alignItems="center"
            justifyContent="center"
            direction="row">
            <Grid item xs={4}>
              <Button variant="outlined" color="primary">
                <PhoneInTalk />
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
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
