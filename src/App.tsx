import React from 'react';
import './styles/index.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'components/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
