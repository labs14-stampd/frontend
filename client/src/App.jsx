import React from 'react';

import './App.css';

import Layout from './views/Layout';
import Dashboard from './views/Dashboard';

function App() {
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
