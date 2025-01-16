"use client";

import { useQuery } from "@tanstack/react-query";
import Header from "../components/layout/header";
import axios from "axios";
import { JobListing } from "@/types/job";
import { Suspense, useMemo } from "react";
import JobFilters from "../components/job/job-filters";
import { useSearchParams } from "next/navigation";

const App = () => {

  const searchParams = useSearchParams();
  // Get all filte variables from url
  const title = searchParams.get('jobTitle') || '';
  const location = searchParams.get('location') || ''
  const jobType = searchParams.get('jobType') || '';
  const maxSalary = searchParams.get('salary') || ''



  const { data: jobs, isLoading, error } = useQuery<JobListing[]>({
    queryKey: ["fetch-jobs"],
    queryFn: async () => {
      try {
        const response = await axios.get("/api/job");
        return response.data.jobs;
      } catch (error) {
        console.error("Error fetching jobs:", error);
        throw error;
      }
    },
    refetchInterval: 30000,
  });


  // Filtering functions
  const filteredJobs = useMemo(() => {
    if (!jobs) return [];
    if (!title.trim() && !location.trim() && !jobType.trim() && !maxSalary.trim()) return jobs;
  
    return jobs.filter((job) => {
      const titleMatch = !title.trim() || 
        job.jobTitle.toLowerCase().includes(title.toLowerCase().trim());
  
      const locationMatch = !location.trim() || 
        job.location.toLowerCase() === location.toLowerCase().trim();
  
      const salaryMatch = !maxSalary.trim() || (job.maxSalary / 12) / 1000 <= parseFloat(maxSalary);
  
      const jobTypeMatch = !jobType.trim() || 
        job.jobType.toLowerCase() === jobType.toLowerCase().trim();
  
      return titleMatch && locationMatch && salaryMatch && jobTypeMatch;
    });
  }, [jobs, title, location, jobType, maxSalary]);
  




  if (isLoading) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="flex items-center justify-center pt-[255px]">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <h1 className="text-xl font-medium">Loading jobs...</h1>
          </div>
        </section>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="flex items-center justify-center pt-[255px]">
          <div className="text-center">
            <h1 className="text-xl font-medium text-red-600 mb-4">
              Failed to fetch jobs
            </h1>
            <p className="text-gray-600">
              Please try again later or contact support if the problem persists.
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Header />
      {filteredJobs.length === 0 && title ? (
        <section className="flex items-center justify-center pt-[255px]">
          <div className="text-center">
            <h1 className="text-xl font-medium mb-4">
              No jobs found for {title}
            </h1>
            <p className="text-gray-600">
              Try adjusting your search terms or browse all available positions.
            </p>
          </div>
        </section>
      ) : (
        <Suspense 
          fallback={
            <div className="w-full h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          }
        >
          <JobFilters jobs={filteredJobs} />
        </Suspense>
      )}
    </main>
  );
};

export default App;