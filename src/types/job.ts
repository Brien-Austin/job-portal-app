export interface JobListing {
    applicationDeadLine: Date | null;
    companyName: string;
    createdAt: string;
    id: string;
    imageUrl: string;
    jobDescription: string;
    jobTitle: string;
    jobType: 'Onsite' | 'Remote' | 'Hybrid';
    location: string;
    maxSalary: number;
    minSalary: number;
    updatedAt: string;
  }
  