import { ReactElement } from 'react';
import { useAppSelector } from '../../store/hooks';

export default function TodosList(): ReactElement {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <ul>
      {todos.map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
}
