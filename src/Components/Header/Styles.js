import { makeStyles,fade } from '@material-ui/core/Styles'


const useStyles = makeStyles((theme) => ({
  AppBar:{
    backgroundColor: '#161824',
    height: '75px',
    display: 'flex',
    // marginBottom: '1rem'
  },
  imgLogo: {
    height: '70px',
    alignSelf: 'center'
  },
  Links: {
    textDecoration: 'none',
    fontSize: '1.5rem',
    margin: '1rem',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#c7c7c7',
    'Links: hover': {
      cursor: 'pointer'
    }
  },
  DIV3: {
    display: 'flex',
    marginLeft: 'auto',
    justifyContent: 'center',
    justifySelf: 'center',
    alignSelf: 'center'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  subBTN:{
    backgroundColor: '#1f80e0',
    color: "white",
    fontFamily: [
      'Roboto',
      'HelveticaNeue-Light',
      'sans-serif',
    ].join(','),
  },
  logBTN: {
    color: "white",
    backgroundColor: 'black'
  },
  subBTN2: {
    width: '88px',
    fontSize: '11px',
    backgroundColor: '#1f80e0',
    color: "white",
  },
  logBTN2: {
    // width: '83px',
    // fontSize: '13px',
    color: "white",
    backgroundColor: 'black'
  },
  imgLogo2: {
    height: '60px'
  },
  Buttons2: {
    display: 'flex'
  },
  Button3: {
    display: 'flex'
  },
  subBTN3: {
    backgroundColor: "#1f80e0",
    width: '88px',
    fontSize: '13px'
  },
  logBTN3: {
    width: '88px',
    fontSize: '13px',
    color: 'white',
    backgroundColor: "black"
  },
  MenuIcon: {
    color: 'white',
    justifyContent: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
    marginTop: '50%'
  },
  Menu: {
    justifyContent: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
    alignItems: 'center'
  },
  DIV1: {
    display: 'flex'
  },
  MenuList: {
    height: '50rem',
    width: '80%',
    backgroundColor: 'black',
    color: "white"
  }
  }));

export default useStyles;