import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routers from './routes';
import './App.css';
import history from './history';

function App() {
  return (
    <Router
      forceRefresh={false}
      basename="/"
      history={history}
    >
      <div className="body">
        <Routers />
      </div>
    </Router>
  );
}

export default App;
