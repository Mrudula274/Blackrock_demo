// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Categories</li>
          <li>Stores</li>
          <li>Finances</li>
          <li>Settings</li>
        </ul>
      </nav>
      <button className="add-item-button">Add item</button>
      <button className="logout-button">Log out</button>
    </aside>
  );
};

export default Sidebar;
