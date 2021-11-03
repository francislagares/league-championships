import React from 'react';
import { ListItem } from '@mui/material';
import { Link, withRouter } from 'react-router-dom';
import { logoutHandler } from 'utils/tools';

const AdminNav = (props: any) => {
  const links = [
    {
      title: 'Matches',
      linkTo: '/admin_matches',
    },
    {
      title: 'Players',
      linkTo: '/admin_players',
    },
  ];

  const renderItems = links.map(({ linkTo, title }) => (
    <Link key={title} to={linkTo}>
      <ListItem button className='admin_nav_link'>
        {title}
      </ListItem>
    </Link>
  ));

  return (
    <div>
      {renderItems}
      <ListItem
        button
        className='admin_nav_link'
        onClick={() => logoutHandler()}
      >
        Log out
      </ListItem>
    </div>
  );
};

export default withRouter(AdminNav);
