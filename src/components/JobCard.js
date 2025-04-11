import React from 'react';
import axios from 'axios';
import './JobCard.css';

const JobCard = ({ job, refresh }) => {
  const handleDelete = async () => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/jobs/${job._id}`);
    refresh();
  };

  const handleStatusChange = async e => {
    await axios.put(`${process.env.REACT_APP_API_URL}/jobs/${job._id}`, {
      ...job, status: e.target.value
    });
    refresh();
  };

  return (
    <div className="job-card">
      <h3>{job.company} - {job.role}</h3>
      <p>Status:
        <select value={job.status} onChange={handleStatusChange}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
      </p>
      <p>Date: {new Date(job.date).toLocaleDateString()}</p>
      <a href={job.link} target="_blank" rel="noreferrer">🔗 Link</a>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default JobCard;
