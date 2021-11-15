import React from 'react';
import AdminNav from 'components/Admin/nav/AdminNav';

interface IProps {
  title?: string;
  children?: React.ReactNode;
}

const AdminLayout = ({ children }: IProps) => {
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
