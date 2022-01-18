import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const styles = makeStyles((theme) => ({
  camera: {
    borderRadius: theme.spacing(2),
    margin: theme.spacing(1),
    height: '50vh',
  }
}));

const CameraFeed = () => {
  const theme = useTheme();
  const classes = styles(theme);

  return (
    <div>
      <img className={classes.camera} src="https://source.unsplash.com/random/640x480" height="100%" alt="background" />
    </div>
  );
}

export default CameraFeed;