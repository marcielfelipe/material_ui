import { createTheme } from '@material-ui/core/styles';
import {colors} from '@material-ui/core/'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#2A2B92',
      light: '#0084C2'
    },
    secondary: {
      main: '#171C24',
      light: '#4B4B54'
    },
    text: {
      primary: '#ffffff',
      secondary: '#171C24'
    },
    background: {
      default: '#222B36',
      paper:'#171C24'
    }
  },
});

export default theme;