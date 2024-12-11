import { ITodo } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const mockTodos: ITodo[] = [
  {
    id: uuidv4(),
    name: 'Buy Flowers',
    complete: false,
  },
  {
    id: uuidv4(),
    name: 'Get Shoes',
    complete: false,
  },
  {
    id: uuidv4(),
    name: 'Collect Tickets',
    complete: false,
  },
  {
    id: uuidv4(),
    name: 'Call Joe',
    complete: true,
  },
];
