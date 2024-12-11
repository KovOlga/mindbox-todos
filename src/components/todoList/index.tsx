import { ReactElement } from 'react';
import { Checkbox, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ITodo } from '../../types';

export default function TodoList({
  todos,
  markComplete,
}: {
  todos: ITodo[];
  markComplete: (id: number) => void;
}): ReactElement {
  return (
    <>
      {todos.length === 0 && <p>All completed</p>}
      {todos.length > 0 && (
        <List>
          {todos.map((item) => {
            return (
              <>
                <ListItem disablePadding key={item.id}>
                  <ListItemButton
                    onClick={() => {
                      markComplete(item.id);
                    }}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox edge="start" color="success" disableRipple checked={item.complete} tabIndex={-1} />
                    </ListItemIcon>
                    <ListItemText id={item.id.toString()} primary={item.name} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      )}
    </>
  );
}
