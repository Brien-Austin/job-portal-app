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
export interface JobFormData {
  jobTitle: string;
  jobDescription: string;
  companyName: string;
  location: string;
  jobType: "Remote" | "Onsite" | "Full-Time" | "Part-Time" | "Contract";
  minSalary: number;
  maxSalary: number;
  applicationDeadLine: Date
}

export const jobSchema = z.object({
  jobTitle: z.string().min(4, {
    message: "Enter a valid Job title",
  }),
  jobDescription: z.string().min(10, {
    message: "Description has to be atleast 10 charatcers",
  }),
  companyName: z.string().min(3, {
    message: " ",
  }),
  location: z.string().min(2, {
    message: "Enter valid location",
  }),
  jobType: z.enum(["Full-time", "Part-time", "Contract", "Internship"]),
  minSalary: z.coerce.number().min(1, {
    message: "Enter a valid min salary",
  }),
  maxSalary: z.coerce.number().min(1, {
    message: "Enter a valid max salary",
  }),

  applicationDeadLine: z.string().transform((str) => new Date(str)),
});
