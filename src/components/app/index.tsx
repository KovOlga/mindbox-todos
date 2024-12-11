import { ReactElement } from 'react';
import Header from '../header';
import TodosList from '../todosList';
import './styles.css';
import Input from '../input';

function App(): ReactElement {
  return (
    <div className="app">
      <Header />
      <main className="wrapper">
        <Input />
        <TodosList />
      </main>
    </div>
  );
}

export default App;
