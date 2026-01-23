import { useState, useEffect } from "react";
import {
  PencilSquareIcon,
  XMarkIcon,
  BuildingOfficeIcon,
  BriefcaseIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const EditJobModal = ({ job, onClose, onSave }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [saving, setSaving] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (job) {
      setCompany(job.company);
      setPosition(job.position);

      // trigger fade-in หลัง mount
      requestAnimationFrame(() => setOpen(true));
    }
  }, [job]);

  const handleClose = () => {
    setOpen(false);

    // รอ animation ก่อน unmount
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    await onSave({
      ...job,
      company,
      position,
    });

    setSaving(false);
    handleClose();
  };

  if (!job) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        transition-opacity duration-200
        ${open ? "bg-black/40 opacity-100" : "bg-black/0 opacity-0"}
      `}
    >
      {/* Modal */}
      <div
        className={`
          w-full max-w-md rounded-xl bg-white p-6 shadow-lg
          transform transition-all duration-200
          ${open ? "scale-100 opacity-100" : "scale-95 opacity-0"}
        `}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PencilSquareIcon className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Edit Job
            </h2>
          </div>

          <button
            onClick={handleClose}
            className="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 flex items-center gap-1 text-sm font-medium text-gray-600">
              <BuildingOfficeIcon className="h-4 w-4" />
              Company
            </label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="mb-1 flex items-center gap-1 text-sm font-medium text-gray-600">
              <BriefcaseIcon className="h-4 w-4" />
              Position
            </label>
            <input
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={handleClose}
              disabled={saving}
              className="rounded-md px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 disabled:opacity-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-70"
            >
              {saving && (
                <ArrowPathIcon className="h-4 w-4 animate-spin" />
              )}
              {saving ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJobModal;
