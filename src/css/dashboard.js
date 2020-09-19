import { makeStyles } from '@material-ui/core/styles';
import KOALALOGO from './../js/pictures/koala.png'

var bgColors = { 
  "Default": "#81b71a",
  "Blue": "#00B1E1",
  "Cyan": "#37BC9B",
  "Green": "#7fad4e",
  "DarkGreen": "#5c8037",
  "Red": "#E9573F",
  "Yellow": "#DAA520",
  "DarkYellow": "#F9A602",
  "White": "#FFFFFF",
};

export const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },

  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  paper_signin: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  papertips: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
  },

  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
    backgroundColor: bgColors.Green,
    flex: 1,
    width: '150px',
    height: '150px',
    // backgroundImage: url('')
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },

  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  //   backgroundColor: bgColors.Green
  // },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: bgColors.Yellow,
    "&:hover": {
      background: bgColors.DarkYellow
    },
  },

  img: {
    width: '100%',
    height: '100%',
    alignItems: 'top',
  },

  imgtips: {
    width: '100%',
    height: 100,
    backgroundColor: bgColors.Yellow,
    "&:hover": {
      background: bgColors.DarkYellow
    },
  },
  submit_spacing: {
    margin: theme.spacing(0,2,0, 0),
    backgroundColor: bgColors.Yellow,
    "&:hover": {
      background: bgColors.DarkYellow
    },
  },
}));
