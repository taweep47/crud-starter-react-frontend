import { useMemo } from "react";

const useProcessedJobs = (
  jobs = [],
  search = "",
  status = "all",
  sort = "latest",
) => {
  return useMemo(() => {
    let result = [...jobs];

    // FILTER
    result = result.filter((job) => {
      const jobStatus = job.status?.toLowerCase() || "";

      if (status !== "all" && jobStatus !== status) return false;

      const keyword = search.toLowerCase();
      const position = job.position?.toLowerCase() || "";
      const company = job.company?.toLowerCase() || "";

      return position.includes(keyword) || company.includes(keyword);
    });

    // SORT
    if (sort === "company-az") {
      result.sort((a, b) => (a.company || "").localeCompare(b.company || ""));
    }

    if (sort === "company-za") {
      result.sort((a, b) => (b.company || "").localeCompare(a.company || ""));
    }

    if (sort === "latest") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (sort === "oldest") {
      result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    return result;
  }, [jobs, search, status, sort]);
};

export default useProcessedJobs;
