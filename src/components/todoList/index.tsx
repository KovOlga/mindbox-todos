import { ReactElement } from 'react';
import { Checkbox, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ITodo } from '../../types';

export default function TodoList({
  todos,
  markComplete,
}: {
  todos: ITodo[];
  markComplete: (id: string) => void;
}): ReactElement {
  return (
    <>
      {todos.length > 0 && (
        <List data-testid="list">
          {todos.map((item, index) => {
            return (
              <div key={item.id}>
                <ListItem data-testid="list-item" disablePadding>
                  <ListItemButton
                    data-testid={`list-item-button-${index}`}
                    onClick={() => {
                      markComplete(item.id);
                    }}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox edge="start" color="success" disableRipple checked={item.complete} tabIndex={-1} />
                    </ListItemIcon>
                    <ListItemText data-testid="list-item-text" id={item.id} primary={item.name} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      )}
    </>
  );
}
