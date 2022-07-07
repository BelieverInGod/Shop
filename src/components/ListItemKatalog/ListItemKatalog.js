import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  height: '38%',
  position: 'relative',
  left: '200px',
  top: '150px',
  maxWidth: 500,
  bgcolor: 'background.paper',
};

export default function ListItemKatalog() {
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="Чохли Iphon" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Скло Iphon" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Ремінці Apple Watch" />
      </ListItem>
      <Divider light />
      <ListItem button>
        <ListItemText primary="Навушники Air Pords" />
      </ListItem>
    </List>
  );
}