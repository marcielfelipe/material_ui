import { createTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2A2B92',
      light: '#0084C2'
    },
    secondary: {
      main: '#202024',
      light: '#4B4B54'
    },
    text: {
      primary: '#ffffff',
      secondary: '#202024'
    },
    background: {
      default: '#121214',
      paper:'#202024'
    }
  },
});

export default theme;