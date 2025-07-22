import React from 'react';
import './Admin.css'; // We'll create this next

const Admin = () => {
  return (
    <div className="admin-page">
      <div className="admin-sidebar">
        <h3 className="sidebar-title">Admin</h3>
        <ul className="sidebar-nav">
          <li className="active">Dashboard</li>
          <li>Users</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      </div>

      <div className="admin-content">
        <h2>Admin Dashboard</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <p>Total Users</p>
            <h3>100</h3>
          </div>
          <div className="stat-card">
            <p>New Users</p>
            <h3>5</h3>
          </div>
          <div className="stat-card">
            <p>Users</p>
            <h3>5</h3>
          </div>
          <div className="stat-card">
            <p>Owners</p>
            <h3>250</h3>
          </div>
          <div className="stat-card">
            <p>Report</p>
            <h3>250</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
