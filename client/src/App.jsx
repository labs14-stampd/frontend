import React from 'react';

import './App.css';

import { Layout } from './components/Layout';
import { Dashboard } from './components/dashboard';

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
