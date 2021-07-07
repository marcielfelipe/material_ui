import { makeStyles } from '@material-ui/core/styles';

const useStylesUI = makeStyles((theme) => ({
  menu:{
    background: theme.palette.secondary.light,
    width: '200px',
    height: '125px',
    borderRadius: '6px',
  },
}));

export default useStylesUI