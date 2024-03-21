// client/pages/admin.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import JobForm from './components/JobForm';
import JobTable from './components/JobTable';

interface Job {
  _id: string;
  title: string;
  description: string;
  location: string;
  type: string;
}

const Admin = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([
    {
      _id: '1',
      title: 'Software Engineer',
      description: 'Description for Software Engineer position...',
      location: 'New York, NY',
      type: 'Full-time',
    },
    {
      _id: '2',
      title: 'Product Manager',
      description: 'Description for Product Manager position...',
      location: 'San Francisco, CA',
      type: 'Full-time',
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('/api/admin/jobs');
        setJobs(response.data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
      setIsLoading(false);
    };

    fetchJobs();
  }, []);

  const handleAddJob = async (job: Job) => {
    try {
      await axios.post('/api/admin/jobs', job);
      setJobs([...jobs, job]);
    } catch (error) {
      console.error('Error adding job:', error);
    }
  };

  const handleUpdateJob = async (id: string, updatedJob: Job) => {
    try {
      await axios.put(`/api/admin/jobs/${id}`, updatedJob);
      setJobs(jobs.map((job) => (job._id === id ? updatedJob : job)));
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };

  const handleDeleteJob = async (id: string) => {
    try {
      await axios.delete(`/api/admin/jobs/${id}`);
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error('Error deleting job:', error);
    }
  };

  if (isLoading) {
    return <div className="p-6 w-2/3 m-auto my-10">Loading...</div>;
  }

  return (
    <div className="p-6 w-2/3 m-auto my-10">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <JobForm onSubmit={handleAddJob} />
      <JobTable jobs={jobs} onEdit={handleUpdateJob} onDelete={handleDeleteJob} />
    </div>
  );
};

export default Admin;