import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import BetaSignup from './components/BetaSignup';

function App() {
  return (
    <Layout>
      <Hero />
      <BetaSignup />
    </Layout>
  );
}

export default App;
