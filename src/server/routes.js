// server/routes.ts

import { Router } from 'express';
import { getJobs, getJob, createJob, updateJob, deleteJob } from './controllers/jobController';

const router = Router();

router.get('/jobs', getJobs);
router.get('/jobs/:id', getJob);
router.post('/jobs', createJob);
router.put('/jobs/:id', updateJob);
router.delete('/jobs/:id', deleteJob);

export { router };