import { ReactElement, useEffect, useState } from 'react';

import Input from '../input';
import TodoList from '../todoList';
import { Button, ButtonGroup, Chip } from '@mui/material';
import { mockTodos } from '../../utils/mock';
import { ControlBtns, ITodo } from '../../types';

const Form = (): ReactElement => {
  const [todos, setTodos] = useState(mockTodos);
  const [completed, setCompleted] = useState(0);
  const [filterBtn, setFilterBtn] = useState<ControlBtns>(ControlBtns.ALL);

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

  const markComplete = (id: string): void => {
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

  const getFilteredTodos = (): ITodo[] => {
    return todos.filter((item) => {
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
    });
  };

  const clearCompeted = (): void => {
    const activeTodos = todos.filter((item) => !item.complete);
    setTodos(activeTodos);
  };

  const addTodo = (todo: ITodo): void => {
    setTodos([todo, ...todos]);
  };

  return (
    <main className="wrapper">
      <Input addTodo={addTodo} />
      <div className="controls">
        <Chip data-testid="counter" label={`${completed} left`} size="small" variant="outlined" />
        <ButtonGroup variant="outlined" aria-label="Basic button group">
          <Button
            data-testid="btn-all"
            size="small"
            variant={filterBtn === ControlBtns.ALL ? 'contained' : 'outlined'}
            onClick={() => setFilterBtn(ControlBtns.ALL)}
          >
            All
          </Button>
          <Button
            data-testid="btn-active"
            size="small"
            variant={filterBtn === ControlBtns.ACTIVE ? 'contained' : 'outlined'}
            onClick={() => setFilterBtn(ControlBtns.ACTIVE)}
          >
            Active
          </Button>
          <Button
            data-testid="btn-completed"
            size="small"
            variant={filterBtn === ControlBtns.COMPLETED ? 'contained' : 'outlined'}
            onClick={() => setFilterBtn(ControlBtns.COMPLETED)}
          >
            Completed
          </Button>
        </ButtonGroup>
        <Button data-testid="btn-clear" onClick={clearCompeted} variant="outlined" size="small">
          Clear completed
        </Button>
      </div>
      <TodoList markComplete={markComplete} todos={getFilteredTodos()} />
    </main>
  );
};
export default Form;
