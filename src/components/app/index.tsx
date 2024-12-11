import { ReactElement, useEffect, useState } from 'react';
import Header from '../header';
import './styles.css';
import Input from '../input';
import TodoList from '../todoList';
import { Button, ButtonGroup, Chip } from '@mui/material';
import { mockTodos } from '../../utils/mock';
import { ControlBtns, ITodo } from '../../types';

function App(): ReactElement {
  const [todos, setTodos] = useState(mockTodos);
  const [completed, setCompleted] = useState(0);
  const [filterBtn, setFilterBtn] = useState<ControlBtns>(ControlBtns.ALL);
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

  const clearCompeted = (): void => {
    const activeTodos = todos.filter((item) => !item.complete);
    setTodos(activeTodos);
  };

  const addTodo = (todo: ITodo): void => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="app">
      <Header />
      <main className="wrapper">
        <Input addTodo={addTodo} />
        <div className="controls">
          <Chip label={`${completed} left`} size="small" variant="outlined" />
          <ButtonGroup variant="outlined" aria-label="Basic button group">
            <Button
              size="small"
              variant={filterBtn === ControlBtns.ALL ? 'contained' : 'outlined'}
              onClick={() => setFilterBtn(ControlBtns.ALL)}
            >
              All
            </Button>
            <Button
              size="small"
              variant={filterBtn === ControlBtns.ACTIVE ? 'contained' : 'outlined'}
              onClick={() => setFilterBtn(ControlBtns.ACTIVE)}
            >
              Active
            </Button>
            <Button
              size="small"
              variant={filterBtn === ControlBtns.COMPLETED ? 'contained' : 'outlined'}
              onClick={() => setFilterBtn(ControlBtns.COMPLETED)}
            >
              Completed
            </Button>
          </ButtonGroup>
          <Button onClick={clearCompeted} variant="outlined" size="small">
            Clear completed
          </Button>
        </div>
        <TodoList
          markComplete={markComplete}
          todos={todos.filter((item) => {
            switch (filterBtn) {
              case ControlBtns.ALL: {
                return item;
              }
              case ControlBtns.ACTIVE: {
                return !item.complete;
              }
              case ControlBtns.COMPLETED: {
                return item.complete;
              }
            }
          })}
        />
      </main>
    </div>
  );
}

export default App;
