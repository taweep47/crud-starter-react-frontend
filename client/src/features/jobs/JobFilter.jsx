import {
  MagnifyingGlassIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

const JobFilter = ({ search, onSearch, status, onStatusChange }) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Search */}
      <div className="relative flex-1">
        <MagnifyingGlassIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          className="
            w-full rounded-md border border-gray-300
            pl-9 pr-3 py-2 text-sm
            focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
          "
          placeholder="Search job or company..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Status Filter */}
      <div className="relative w-full sm:w-44">
        <FunnelIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <select
          className="
            w-full appearance-none rounded-md border border-gray-300
            pl-9 pr-8 py-2 text-sm
            focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
          "
          value={status}
          onChange={(e) => onStatusChange(e.target.value)}
        >
          <option value="all">All status</option>
          <option value="applied">Applied</option>
          <option value="interview">Interview</option>
          <option value="offer">Offer</option>
          <option value="rejected">Rejected</option>
        </select>

        {/* custom dropdown arrow */}
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          ▾
        </span>
      </div>
    </div>
  );
};

export default JobFilter;
