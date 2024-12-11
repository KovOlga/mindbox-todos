import { ReactElement } from 'react';
import Header from '../header';
import './styles.css';
import Input from '../input';
import TodoList from '../todoList';
import { Button, ButtonGroup, Chip } from '@mui/material';

function App(): ReactElement {
  return (
    <div className="app">
      <Header />
      <main className="wrapper">
        <Input />
        <TodoList />
        <div className="controls">
          <Chip label="2 left" size="small" variant="outlined" />
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button size="small" variant="contained">
              One
            </Button>
            <Button size="small">Two</Button>
            <Button size="small">Three</Button>
          </ButtonGroup>
          <Button variant="outlined" size="small">
            Clear completed
          </Button>
        </div>
      </main>
    </div>
  );
}

export default App;
