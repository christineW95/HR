import * as React from 'react';
import { styled } from '@material-ui/material/styles';
import Box from '@material-ui/material/Box';
import List from '@material-ui/material/List';
import ListItem from '@material-ui/material/ListItem';
import ListItemAvatar from '@material-ui/material/ListItemAvatar';
import ListItemText from '@material-ui/material/ListItemText';
import Avatar from '@material-ui/material/Avatar';
import IconButton from '@material-ui/material/IconButton';
import FolderIcon from '@material-ui/icons-material/Folder';
import DeleteIcon from '@material-ui/icons-material/Delete';
import Edit from '@material-ui/icons-material/Edit';
import CalendarToday from '@material-ui/icons-material/CalendarToday';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function CustomList() {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                style={{margin:10}}
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <Edit />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <CalendarToday />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
  );
}
