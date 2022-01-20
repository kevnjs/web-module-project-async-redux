import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import SelectedCard from './components/SelectedCard';
import { onPageLoad } from './actions'

function App() {

  return (
    <div className="App">
      <h1>Random Yugioh Cards</h1>
      <SelectedCard />
    </div>
  );
}

export default App;