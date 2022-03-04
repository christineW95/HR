import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Edit from '@mui/icons-material/Edit';
import CalendarToday from '@mui/icons-material/CalendarToday';

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
