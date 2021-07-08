import { makeStyles } from '@material-ui/core/styles';
import {colors} from '@material-ui/core/'
const useStylesUI = makeStyles((theme) => ({
  input:{
    marginTop: '1rem',
    '& label': {
      color: colors.grey[500],
    },
    '& label.Mui-focused': {
      color: theme.palette.text.primary,
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: theme.palette.text.primary,
      },
      '&:hover fieldset': {
        borderColor: theme.palette.common.white,
      },
    },
  }
}));

export default useStylesUI