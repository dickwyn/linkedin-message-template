import React from 'react';
import './styles/App.scss';
import Template from './Components/Template/Template';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

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
