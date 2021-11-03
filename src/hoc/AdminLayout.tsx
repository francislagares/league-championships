import React from 'react';
import AdminNav from 'components/Admin/nav/AdminNav';

const AdminLayout: React.FC = ({ children }) => {
  return (
    <div className='admin_container'>
      <div className='admin_left_nav'>
        <AdminNav />
      </div>
      <div className='admin_right'>{children}</div>
    </div>
  );
};

export default AdminLayout;
