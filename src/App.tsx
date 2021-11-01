import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ComponentType } from 'react-router/node_modules/@types/react';
import { ToastContainer } from 'react-toastify';

import Dashboard from 'components/Admin/Dashboard';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Home from 'components/Home';
import SignIn from 'components/SignIn';

import './styles/index.css';
import 'react-toastify/dist/ReactToastify.css';
import AuthGuard from 'hoc/Auth';

interface IProps {
  user: IUser;
}
const App = ({ user }: IProps) => {
  console.log({ user });
  return (
    <BrowserRouter>
      <Header user={user} />
      <Switch>
        <Route path='/dashboard' exact component={AuthGuard(Dashboard)} />
        <Route
          path='/sign_in'
          exact
          component={(props: ComponentType) => (
            <SignIn {...props} user={user} />
          )}
        />
        <Route path='/' exact component={Home} />
      </Switch>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
