import JobItem from "./JobItem";
import EmptyState from "./EmptyState";

const JobList = ({ jobs, onDeleteJob, deletingId, onEditJob }) => {
  if (jobs.length === 0) {
    return <EmptyState onAdd={() => alert("Open add job form")} />;
  }

  return (
    <section className="space-y-4">
      {jobs.map((job) => (
        <JobItem
          key={job._id}
          job={job}
          onDelete={onDeleteJob}
          isDeleting={deletingId === job._id}
          onEdit={onEditJob}
        />
      ))}
    </section>
  );
};

export default JobList;
