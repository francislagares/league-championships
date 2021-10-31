import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'components/Home';
import SignIn from 'components/SignIn';

import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';

interface IProps {
  user: IUser;
}
const App = ({ user }: IProps) => {
  console.log({ user });
  return (
    <BrowserRouter>
      <Header user={user} />
      <Switch>
        <Route path='/sign_in' component={SignIn} />
        <Route path='/' component={Home} />
      </Switch>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
