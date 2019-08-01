import React from 'react';

import './App.css';

import Layout from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';

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
