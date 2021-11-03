import React from 'react';
import AdminLayout from 'hoc/AdminLayout';

const Dashboard = (props: any) => {
  console.log(props);
  return (
    <AdminLayout>
      <div className='user_dashboard'>
        <div>This is your Dashboard</div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
