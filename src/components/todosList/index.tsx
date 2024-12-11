import { ReactElement } from 'react';
import { useAppSelector } from '../../store/hooks';
import { Checkbox, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function TodosList(): ReactElement {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <List>
      {todos.map((item) => {
        return (
          <>
            <ListItem disablePadding key={item.id}>
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox edge="start" disableRipple checked={item.complete} tabIndex={-1} />
                </ListItemIcon>
                <ListItemText id={item.id.toString()} primary={item.name} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>
        );
      })}
    </List>
  );
}
