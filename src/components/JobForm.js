import React, { useState } from 'react';
import axios from 'axios';
import './JobForm.css';

const JobForm = () => {
  const [form, setForm] = useState({
    company: '', role: '', status: 'Applied', date: '', link: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/jobs`, form);
    setForm({ company: '', role: '', status: 'Applied', date: '', link: '' });
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="company" value={form.company} onChange={handleChange} placeholder="Company" required />
      <input name="role" value={form.role} onChange={handleChange} placeholder="Role" required />
      <select name="status" value={form.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input name="date" type="date" value={form.date} onChange={handleChange} required />
      <input name="link" value={form.link} onChange={handleChange} placeholder="Link" required />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
