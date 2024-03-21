// client/components/JobTable.tsx

import Link from 'next/link';
interface Job {
    _id: string;
    title: string;
    description: string;
    location: string;
    type: string;
}

interface JobTableProps {
  jobs: Job[];
  onEdit: (id: string, updatedJob: Job) => void;
  onDelete: (id: string) => void;
}

const JobTable = ({ jobs, onEdit, onDelete }: JobTableProps) => {
  return (
    <div className='my-10 '>
        <h1 className='font-bold text-center m-10 text-4xl '>Current Jobs</h1>
        <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-50">
            <tr>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Title
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Description
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Location
            </th>
            <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                Type
            </th>
            <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
            </th>
            <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Delete</span>
            </th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {jobs.map((job) => (
                <tr key={job._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{job.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{job.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{job.location}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-500">{job.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link href={`/admin/edit/${job._id}` } legacyBehavior>
                    <a
                    className="text-indigo-600 hover:text-indigo-900"
                    onClick={() => onEdit(job._id, job)}
                    >
                    Edit
                    </a>
                </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a
                    href="#"
                    className="text-red-600 hover:text-red-900"
                    onClick={() => onDelete(job._id)}
                    >
                    Delete
                </a>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    </div>
  );
};

export default JobTable;