import makeStyles from '@mui/styles/makeStyles';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

// eslint-disable-next-line no-unused-vars
export const useStyles = makeStyles((theme) => ({
  searchBox: {
    marginLeft: 'auto',
  },
  main: {
    minHeight: '80vh',
  },

  carouselHeader: {
    flexGrow: 1,
    textAlign: 'center',
  },

  carouselImage: {
    margin: 'auto',
    flexDirection: 'column',
  },
  centerComponent: {
    display: 'flex',
    justifyContent: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  tab: {
    minWidth: 70, // a number of your choice
    width: 70, // a number of your choice
}

}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: '5px',
  width: '8rem',
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 2),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6.5)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
