import { ReactElement, useEffect, useState } from 'react';
import Header from '../header';
import './styles.css';
import Input from '../input';
import TodoList from '../todoList';
import { Button, ButtonGroup, Chip } from '@mui/material';
import { mockTodos } from '../../utils/mock';

function App(): ReactElement {
  const [todos, setTodos] = useState(mockTodos);
  const [filteredTodos] = useState(mockTodos);
  const [completed, setCompleted] = useState(0);
  // setFilteredTodos
  const markComplete = (id: number): void => {
    const ind = todos.findIndex((item) => item.id === id);
    const nextCounters = todos.map((item, i) => {
      if (i === ind) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
    setTodos(nextCounters);
  };

  useEffect(() => {
    const completedNum = todos.reduce((accumulateValue, currentItem) => {
      if (!currentItem.complete) {
        return accumulateValue + 1;
      } else {
        return accumulateValue;
      }
    }, 0);
    setCompleted(completedNum);
  }, [todos]);

  return (
    <div className="app">
      <Header />
      <main className="wrapper">
        <Input />
        <TodoList markComplete={markComplete} todos={filteredTodos} />
        <div className="controls">
          <Chip label={`${completed} left`} size="small" variant="outlined" />
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button size="small" variant="contained">
              All
            </Button>
            <Button size="small">Active</Button>
            <Button size="small">Completed</Button>
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
