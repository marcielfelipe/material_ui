import { makeStyles } from '@material-ui/core/styles';

const useStylesUI = makeStyles((theme) => ({
  navContainer:{
    height: '60px',
  },
  nav:{
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo:{
    height: '40px',
    cursor: 'pointer'
  },
  icon:{
    cursor: 'pointer'
  },
  menuItem:{
    '& > *':{
      background: theme.palette.background.default
    }
  }
}));

export default useStylesUI