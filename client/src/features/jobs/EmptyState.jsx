import { BriefcaseIcon, PlusIcon } from "@heroicons/react/24/outline";

const EmptyState = ({ onAdd }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-white py-16 text-center">
      <BriefcaseIcon className="h-14 w-14 text-gray-400" />

      <h3 className="mt-4 text-lg font-semibold text-gray-900">
        No jobs yet
      </h3>

      <p className="mt-1 text-sm text-gray-500">
        Start tracking your job applications.
      </p>

      <button
        onClick={onAdd}
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        <PlusIcon className="h-4 w-4" />
        Add your first job
      </button>
    </div>
  );
};

export default EmptyState;
