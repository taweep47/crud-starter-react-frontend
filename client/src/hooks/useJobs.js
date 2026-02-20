import { useEffect, useState } from "react";

const API_URL = "https://crud-starter-react-frontend.onrender.com/api/jobs";

const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);
  const [error, setError] = useState(null);

  // โหลด jobs ครั้งแรก
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch jobs");

        const data = await res.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // CREATE
  const addJob = async (job) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
      });

      const data = await res.json();

      if (!res.ok) {
        throw data;
      }

      setJobs((prev) => [data, ...prev]);
    } catch (err) {
      alert(err.message || err.errors?.join("\n"));
    }
  };

  // UPDATE
  const updateJob = async (job) => {
    const res = await fetch(`${API_URL}/${job._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(job),
    });

    if (!res.ok) {
      throw new Error("Failed to update job");
    }

    const data = await res.json();
    setJobs((prev) => prev.map((j) => (j._id === data._id ? data : j)));
  };

  // DELETE
  const deleteJob = async (id) => {
    setDeletingId(id);

    await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    setJobs((prev) => prev.filter((job) => job._id !== id));
    setDeletingId(null);
  };

  return {
    jobs,
    loading,
    error,
    deletingId,
    addJob,
    updateJob,
    deleteJob,
  };
};

export default useJobs;
