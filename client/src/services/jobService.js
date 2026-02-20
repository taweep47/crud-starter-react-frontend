const API_URL = "https://crud-starter-react-frontend.onrender.com/api/jobs";

//ดึงข้อมูลจาก database
export const getJobs = async () => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
};

//เพิ่ม job
export const createJob = async (job) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });
  return res.json();
};

//แก้ไข job
export const updateJobById = async (id, job) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(job),
  });

  if (!res.ok) throw new Error("Failed to update job");
  return res.json();
};

//ลบ job
export const removeJob = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
