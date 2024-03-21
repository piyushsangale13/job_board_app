
import { v4 as uuidv4 } from 'uuid';
import { readFileSync, writeFileSync } from 'fs';
import express from 'express';
const JOBS_FILE = './client/jobs.json';

interface Job {
    _id: string;
    title: string;
    description: string;
    location: string;
    type: string;
  }
function readJobs(): Job[] {
  const rawData = readFileSync(JOBS_FILE, 'utf-8');
  return JSON.parse(rawData);
}

function writeJobs(jobs: Job[]): void {
  writeFileSync(JOBS_FILE, JSON.stringify(jobs, null, 2));
}

export const getJobs = (_: express.Request, res: express.Response) => {
  const jobs = readJobs();
  res.json(jobs);
};

export const getJob = (req: express.Request, res: express.Response) => {
  const jobs = readJobs();
  const job = jobs.find((j) => j._id === req.params.id);

  if (!job) {
    res.status(404).json({ message: 'Job not found' });
  } else {
    res.json(job);
  }
};

export const createJob = (req: express.Request, res: express.Response) => {
  const jobs = readJobs();
  const newJob: Job = {
    _id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    type: req.body.type,
  };
  jobs.push(newJob);
  writeJobs(jobs);
  res.status(201).json(newJob);
};

export const updateJob = (req: express.Request, res: express.Response) => {
  const jobs = readJobs();
  const index = jobs.findIndex((j) => j._id === req.params.id);

  if (index === -1) {
    res.status(404).json({ message: 'Job not found' });
  } else {
    jobs[index] = {
      ...jobs[index],
      ...req.body,
    };
    writeJobs(jobs);
    res.json(jobs[index]);
  }
};

export const deleteJob = (req: express.Request, res: express.Response) => {
  const jobs = readJobs();
  const index = jobs.findIndex((j) => j._id === req.params.id);

  if (index === -1) {
    res.status(404).json({ message: 'Job not found' });
  } else {
    jobs.splice(index, 1);
    writeJobs(jobs);
    res.status(204).end();
  }
};