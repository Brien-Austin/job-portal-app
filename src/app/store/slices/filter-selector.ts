import { JobListing } from "@/types/job";
import { RootState } from "../store";


export const selectFilteredJobs = (state: RootState, jobs: JobListing[]): JobListing[] => {
  const { title, location, jobtype, maxSalary } = state.filter;

  return jobs.filter((job) => {
    const matchesTitle = title ? job.jobTitle.toLowerCase().includes(title.toLowerCase()) : true;
    const matchesLocation = location ? job.location.toLowerCase().includes(location.toLowerCase()) : true;
    const matchesJobType = jobtype === "Full-time" ? true : job.jobType === jobtype; // Adjust based on your mapping
    const matchesMaxSalary = maxSalary ? job.maxSalary <= maxSalary : true;

    return matchesTitle && matchesLocation && matchesJobType && matchesMaxSalary;
  });
};
