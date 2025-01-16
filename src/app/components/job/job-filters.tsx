"use client";

import { JobListing } from "@/types/job";
import JobCard from "../job-card";
// import { useSelector } from "react-redux";
// import { RootState } from "@/app/store/store";
// import { selectFilteredJobs } from "@/app/store/slices/filter-selector";

interface JobFiltersProps {
  jobs: JobListing[];
}

const JobFilters: React.FC<JobFiltersProps> = ({ jobs }) => {
//   const title = useSelector((state: RootState) => state.filter.title) || '';
//   const location = useSelector((state: RootState) => state.filter.location) || '';
//   const jobType = useSelector((state: RootState) => state.filter.jobtype);
//   const maxSalary = useSelector((state: RootState) => state.filter.maxSalary);



  return (
    <section className="flex items-center justify-evenly gap-4 pt-[255px] px-16 flex-wrap mb-20">
      {jobs && jobs.length > 0 ? (
        jobs.map((job, index) => (
          <JobCard key={job.id || index} {...job} />
        ))
      ) : (
        <div className="flex items-center justify-center w-full pt-[25px]">
          <h1>
            No openings at the moment!{" "}
            <span className="animate-bounce">🙃</span>
          </h1>
        </div>
      )}
    </section>
  );
};

export default JobFilters;