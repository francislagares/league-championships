import React from 'react';
import { signOut } from '@firebase/auth';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { auth } from 'config/firebase';
import { CityLogo } from 'utils/tools';

import { showSuccessToast } from 'utils/tools';

interface IProps {
  user: IUser;
}

const Header = ({ user }: IProps) => {
  const logoutHandler = async () => {
    await signOut(auth).then(() => showSuccessToast('Good bye!'));
  };

  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: '#98c5e9',
        boxShadow: 'none',
        padding: '10px 0',
        borderBottom: '2px solid #00285e',
      }}
    >
      <Toolbar style={{ display: 'flex' }}>
        <div style={{ flexGrow: 1 }}>
          <div className='header_logo'>
            <CityLogo link={true} linkTo={'/'} width='70px' height='70' />
          </div>
        </div>
        <Link to='/the_team'>
          <Button color='inherit'>The Team</Button>
        </Link>
        <Link to='/the_matches'>
          <Button color='inherit'>The Matches</Button>
        </Link>
        {user && (
          <>
            <Link to='/dashboard'>
              <Button color='inherit'>Dashboard</Button>
            </Link>
            <Button color='inherit' onClick={() => logoutHandler()}>
              Log out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
