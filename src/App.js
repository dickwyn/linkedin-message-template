import React from 'react';
import './styles/App.scss';
import Template from './Components/Template/Template';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="container">
      {/* <div className="one">content</div>
      <div className="jj">footer</div>
      <div className="two">content</div> */}
      <Header />
      <Template />
      <Footer />
    </div>
  );
};

export default App;
