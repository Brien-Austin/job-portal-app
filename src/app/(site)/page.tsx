"use client"

import { useQuery } from "@tanstack/react-query";
import Header from "../components/layout/header";
import axios from "axios";
import { JobListing } from "@/types/job";
import JobCard from "../components/job-card";



const App = () => {

  const {data : jobs} = useQuery<JobListing[]>({
    queryKey : ['fetch-jobs'],
    queryFn : async() =>{
      const response = await axios.get('/api/job')
      return response.data.jobs
    }
  })

  console.log(jobs)
  return (
    <main>
      <Header />
      <section className="flex items-center justify-evenly gap-4 pt-[255px] px-16 flex-wrap mb-20">
 
       {
        jobs && jobs.map((j,i)=>(
          <JobCard key={i} id={j.id} updatedAt={j.updatedAt} applicationDeadLine={j.applicationDeadLine}  jobTitle={j.jobTitle} jobDescription={j.jobDescription} imageUrl={j.imageUrl} jobType={j.jobType} location={j.location} companyName={j.companyName} createdAt={j.createdAt} minSalary={j.minSalary} maxSalary={j.maxSalary}/>
        ))
       }
      </section>
    </main>
  );
};

export default App;