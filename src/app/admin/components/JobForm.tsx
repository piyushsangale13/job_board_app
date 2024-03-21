// client/components/JobForm.tsx

import { useState } from 'react';

interface JobFormProps {
  onSubmit: (job: Job) => Promise<void>;
}

interface Job {
    _id: string;
    title: string;
    description: string;
    location: string;
    type: string;
}

const JobForm = ({ onSubmit }: JobFormProps) => {
  const [job, setJob] = useState<Job>({
    _id: '',
    title: '',
    description: '',
    location: '',
    type: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(job);
    setJob({_id:'', title: '', description: '', location: '', type: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="my-10">
        <label
          htmlFor="title"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Title
        </label>
        <input
          type="text"
          name="title"
          value={job.title}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter job title"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Description
        </label>
        <textarea
          name="description"
          value={job.description}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
          placeholder="Enter job description"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Location
        </label>
        <input
          type="text"
          name="location"
          value={job.location}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter job location"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="type"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Type
        </label>
        <input
          type="text"
          name="type"
          value={job.type}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter job type"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default JobForm;