import { ReactElement } from 'react';
import Header from '../header';
import './styles.css';
import Form from '../form';

function App(): ReactElement {
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
