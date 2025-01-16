import * as z from "zod";
export interface JobListing {
  applicationDeadLine: Date | null;
  companyName: string;
  createdAt: string;
  id: string;
  imageUrl: string;
  jobDescription: string;
  jobTitle: string;
  jobType: "Onsite" | "Remote" | "Hybrid";
  location: string;
  maxSalary: number;
  minSalary: number;
  updatedAt: string;
}


export const jobSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  jobDescription: z.string().min(1, "Job description is required"),
  companyName: z.string().min(1, "Company name is required"),
  location: z.string().min(1, "Location is required"),
  jobType: z.enum(["Full-time", "Part-time", "Contract", "Internship", "Remote"]),
  minSalary: z.number().min(0),
  maxSalary: z.number().min(0),
  applicationDeadLine: z.string(),
});

export type JobFormData = z.infer<typeof jobSchema>