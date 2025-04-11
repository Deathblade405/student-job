import React, { useEffect, useState } from 'react';
import axios from 'axios';
import JobCard from './JobCard';
import './JobList.css';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchJobs = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);
    setJobs(res.data);
    console.log("Submitting to:", `${process.env.REACT_APP_API_URL}/jobs`);

  };

  useEffect(() => {
    fetchJobs();
  }, [filter]);

  return (
    <div>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="">All Statuses</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
      <div className="job-list">
        {jobs.map(job => <JobCard key={job._id} job={job} refresh={fetchJobs} />)}
      </div>
    </div>
  );
};

export default JobList;
