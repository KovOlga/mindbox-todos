import { FormEvent, ReactElement, useState } from 'react';
import { TextField } from '@mui/material';
import { ITodo } from '../../types';
import { v4 as uuidv4 } from 'uuid';

export default function Input({ addTodo }: { addTodo: (todo: ITodo) => void }): ReactElement {
  const [value, setValue] = useState('');
  const submitNewToDo = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addTodo({ complete: false, name: value, id: uuidv4() });
  };
  return (
    <form onSubmit={submitNewToDo}>
      <TextField
        fullWidth
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        color="primary"
        id="outlined-basic"
        label="What needs to be done?"
        variant="outlined"
      />
    </form>
  );
}
