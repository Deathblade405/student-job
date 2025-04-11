import React from 'react';
import JobForm from './components/JobForm';
import JobList from './components/JobList';
import './App.css';

const App = () => (
  <div className="container">
    <h1>🧑‍💻 Student Job Tracker</h1>
    <JobForm />
    <JobList />
  </div>
);

export default App;
