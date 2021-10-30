import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { auth } from 'config/firebase';

const Init = (props: any) => {
  return <App {...props} />;
};

auth.onAuthStateChanged(user => {
  ReactDOM.render(<Init user={user} />, document.getElementById('root'));
});
