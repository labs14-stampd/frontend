import React from 'react';

import './App.css';

import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';

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
