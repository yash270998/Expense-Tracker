import React from 'react';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
