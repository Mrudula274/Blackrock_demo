// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import FinancialOverview from './components/FinancialOverview';
import MyTasks from './components/MyTasks';
import ExpenseCategories from './components/ExpenseCategories';
import FinancialProgress from './components/FinancialProgress';
import FinancialWidget from './components/FinancialWidget';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Financial Report Ready', status: 'Today\'s' },
    { id: 2, text: 'Sign Financial Agreement', status: 'Today\'s Task' },
    { id: 3, text: 'Keynote: Market Trends Tomorrow', status: 'Upcoming' },
    { id: 4, text: 'Research New Investment', status: 'Financial' },
    { id: 5, text: 'Automated budgeting', status: 'This month\'s' }
  ]);

  return (
    <div className="App">
      <Header />
      <Sidebar />
      <main>
        <section className="main-content">
          <FinancialOverview />
          <MyTasks tasks={tasks} />
        </section>
        <section className="main-content">
          <ExpenseCategories />
          <FinancialProgress />
          <FinancialWidget />
        </section>
      </main>
    </div>
  );
}

export default App;
