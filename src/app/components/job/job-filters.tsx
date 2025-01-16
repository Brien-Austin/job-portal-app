"use client";

import { JobListing } from "@/types/job";
import JobCard from "../job-card";


interface JobFiltersProps {
  jobs: JobListing[];
}

const JobFilters: React.FC<JobFiltersProps> = ({ jobs }) => {




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