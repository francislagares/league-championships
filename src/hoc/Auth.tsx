import React from 'react';
import { Redirect } from 'react-router-dom';
import { ComponentType } from 'react-router/node_modules/@types/react';
import { auth } from 'config/firebase';

const AuthGuard = (Component: ComponentType) => {
  return class AuthHoc extends React.Component<{}> {
    authCheck = () => {
      const user = auth.currentUser;

      if (user) {
        return <Component {...this.props} />;
      } else {
        return <Redirect to='/' />;
      }
    };

    render() {
      return this.authCheck();
    }
  };
};

export default AuthGuard;
