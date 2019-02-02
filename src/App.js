import React from 'react';
import './styles/App.scss';
import Template from './Components/Template';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Template />
        <Footer />
      </div>
    </div>
  );
};

export default App;
