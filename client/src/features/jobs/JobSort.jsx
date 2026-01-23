import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

const JobSort = ({ sort, onChange }) => {
  return (
    <div className="relative w-full sm:w-48">
      <ArrowsUpDownIcon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

      <select
        className="
          w-full appearance-none rounded-md border border-gray-300
          pl-9 pr-8 py-2 text-sm
          focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500
        "
        value={sort}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="latest">Latest</option>
        <option value="company-az">Company A–Z</option>
        <option value="company-za">Company Z–A</option>
      </select>

      {/* dropdown arrow */}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
        ▾
      </span>
    </div>
  );
};

export default JobSort;
