import { ReactElement } from 'react';
import Header from '../header';
import './styles.css';
import Form from '../form';

function App(): ReactElement {
  return (
    <div className="app">
      <Header />
      <Form />
    </div>
  );
}

export default App;
