import { FC } from 'react';

import './App.scss';
import Header from './components/Header';
import Form from './components/Form';

const App: FC = () => {
  return (
    <>
      <Header title="Form validation using hooks" />
      <Form />
    </>
  );
};

export default App;
