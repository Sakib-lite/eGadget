import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DarkModeSwitch from './DarkModeSwitch';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function DropDownList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          <DarkModeSwitch />
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Catagory' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Mobile' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Laptop' />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Others' />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton>
        <ListItemIcon>
          <HowToRegIcon />
        </ListItemIcon>
        <ListItemText primary='Register' />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <LoginIcon />
        </ListItemIcon>
        <ListItemText primary='Log in' />
      </ListItemButton>
    </List>
  );
}
