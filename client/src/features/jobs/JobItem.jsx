import { useState } from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  BuildingOfficeIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import ConfirmModal from "./ConfirmModal";

const JobItem = ({ job, onDelete, onEdit }) => {
  const formatStatus = (status = "") => {
    if (!status) return "-";
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  const STATUS_STYLES = {
    applied: "bg-blue-100 text-blue-700",
    interview: "bg-yellow-100 text-yellow-700",
    offer: "bg-green-100 text-green-700",
    rejected: "bg-red-100 text-red-700",
  };

  const normalizedStatus = job.status?.toLowerCase().trim();
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-gray-900">
            {job.position}
          </h3>

          <div className="mt-1 flex items-center gap-1 text-sm text-gray-600">
            <BuildingOfficeIcon className="h-4 w-4" />
            {job.company}
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            STATUS_STYLES[normalizedStatus] || "bg-gray-100 text-gray-700"
          }`}
        >
          {formatStatus(job.status)}
        </span>
      </div>

      {/* Meta */}
      <div className="mt-3 flex items-center gap-1 text-xs text-gray-500">
        <CalendarDaysIcon className="h-4 w-4" />
        Applied on {job.appliedDate || "-"}
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-end gap-4 text-sm">
        <button
          onClick={() => onEdit(job)}
          className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800"
        >
          <PencilSquareIcon className="h-4 w-4" />
          Edit
        </button>

        <button
          onClick={() => setConfirmOpen(true)}
          className="inline-flex items-center gap-1 font-medium text-red-600 hover:text-red-800"
        >
          <TrashIcon className="h-4 w-4" />
          Delete
        </button>

        <ConfirmModal
          open={confirmOpen}
          title="Delete job"
          message={`Are you sure you want to delete ${job.company}?`}
          onCancel={() => setConfirmOpen(false)}
          onConfirm={() => {
            onDelete(job._id);
            setConfirmOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default JobItem;
