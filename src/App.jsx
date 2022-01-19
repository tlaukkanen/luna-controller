
import './App.css';
import { createTheme, Grid, ThemeProvider } from '@mui/material';

import { Joystick } from 'react-joystick-component';

import CameraFeed from './Components/CameraFeed';
import ButtonPanel from './Components/ButtonPanel';

import { Box } from '@mui/system';

const theme = createTheme({
  palette: {
      primary: {
          main: '#432D39',
      },
      secondary: {
          main: '#735E5B',
      },
      background: {
          default: '#3B3034',
      },
      text: {
          primary: '#ECE0B6',
          secondary: '#D1CDAA',
      },
  },
})

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
    <ThemeProvider theme={theme}>
      <div className="App">
        <Grid
          container spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Grid item xs={12} className='halfPanel'>
            <CameraFeed />
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
                size={140}
                move={(e) => moved(e)}
                stop={stopped} 
                baseColor={theme.palette.primary.main}
                stickColor={theme.palette.secondary.main}
                />
            </Box>
          </Grid>
          <Grid item xs={6} >
            <Grid container spacing={2} alignItems="center"
              justifyContent="center"
              direction="row"
              className='halfPanel'
            >
              <ButtonPanel />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
