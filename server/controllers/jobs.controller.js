import Job from "../models/Job.js";

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ isDeleted: false })
      .sort({ createdAt: -1 });

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch jobs" });
  }
};


export const addJob = async (req, res, next) => {
  try {
    const job = await Job.create({
      ...req.body,
      status:
        req.body.status?.charAt(0).toUpperCase() + req.body.status?.slice(1),
    });

    res.status(201).json(job);
  } catch (err) {
    next(err);
  }
};

export const updateJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  res.json(job);
};

export const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndUpdate(
    req.params.id,
    { isDeleted: true },
    { new: true }
  );

  if (!job) {
    return res.status(404).json({ message: "Job not found" });
  }

  res.status(200).json({ message: "Job soft deleted" });
};
