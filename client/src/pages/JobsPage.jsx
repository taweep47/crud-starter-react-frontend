import { useState } from "react";
import JobForm from "../features/jobs/JobForm";
import JobList from "../features/jobs/JobList";
import JobFilter from "../features/jobs/JobFilter";
import JobSort from "../features/jobs/JobSort";
import EditJobModal from "../features/jobs/EditJobModal";
import useJobs from "../hooks/useJobs";
import useProcessedJobs from "../hooks/useProcessedJobs";
import { useSearchParams } from "react-router-dom";
import JobSkeleton from "../assets/JobSkeleton";

const JobsPage = () => {
  const [editingJob, setEditingJob] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "all";
  const sort = searchParams.get("sort") || "latest";

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (!value || value === "all" || value === "latest") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    setSearchParams(params);
  };

  const { jobs, loading, addJob, deleteJob, updateJob } = useJobs();
  const processedJobs = useProcessedJobs(jobs, search, status, sort);

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-4">
        {[...Array(4)].map((_, i) => (
          <JobSkeleton key={i} />
        ))}
      </div>
    );
  }

  const openEdit = (job) => setEditingJob(job);
  const closeEdit = () => setEditingJob(null);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Job Tracker
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Track and manage your job applications
        </p>
      </div>

      {/* Main layout */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left: Add Job */}
        <aside className="lg:col-span-1">
          <JobForm onAddJob={addJob} />
        </aside>

        {/* Right: Filters + List */}
        <section className="lg:col-span-2 space-y-5">
          {/* Toolbar */}
          <div className="rounded-xl border bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <JobFilter
                search={search}
                status={status}
                onSearch={(value) => updateParams("search", value)}
                onStatusChange={(value) => updateParams("status", value)}
              />
              <JobSort
                sort={sort}
                onChange={(value) => updateParams("sort", value)}
              />
            </div>
          </div>

          {/* Job list */}
          <JobList
            jobs={processedJobs}
            onDeleteJob={deleteJob}
            onEditJob={openEdit}
          />
        </section>
      </div>

      {/* Edit modal */}
      {editingJob && (
        <EditJobModal
          job={editingJob}
          onClose={closeEdit}
          onSave={async (job) => {
            await updateJob(job);
            closeEdit();
          }}
        />
      )}
    </div>
  );
};

export default JobsPage;
