import { makeStyles } from '@material-ui/core/styles';
import {colors} from '@material-ui/core/'

const useStylesUI = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
  },
  value:{
    fontWeight: 'bold'
  },
  green:{
    color: colors.green[500]
  },
  blue:{
    color: theme.palette.primary.main
  },
  red:{
    color: theme.palette.error.main
  }
  
}));

export default useStylesUI