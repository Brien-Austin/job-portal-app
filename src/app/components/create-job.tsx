"use client"
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { jobSchema } from "@/types/job";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronsDown, ChevronsRight } from "lucide-react";
import axios from "axios";
import { CREATE_JOB } from "../constants/constants";
import { useRouter } from "next/navigation";

const CreateJob = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter()

  const form = useForm<z.infer<typeof jobSchema>>({
    resolver: zodResolver(jobSchema),
    mode: "onChange", 
    defaultValues: {
      jobType: "Full-time",
      minSalary: 0,
      maxSalary: 0,
    }
  });

  const { 
    handleSubmit, 
    register, 
    watch,
    formState: { errors, isValid, isSubmitting },
    reset
  } = form;

  const onSubmit = async (values: z.infer<typeof jobSchema>) => {
    try {
     const response = await axios.post(CREATE_JOB,values)
     const data = response.data
     console.log(data)
     
      reset();
      close();
      router.push("/")

     

     
     
       
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  const handleClose = () => {
    close();
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={handleClose}
        centered
        size={"848px"}
        styles={{
          content: {
            height: "779px",
            width: "848px",
          },
        }}
      >
        <h1 className="text-center font-[700] text-[24px]">Create Job Opening</h1>

        <form className="pt-[20px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="container mx-auto gap-4 px-4">
            <div className="grid grid-cols-2 place-items-center gap-4">
              {/* Job Title */}
              <div className="flex flex-col-reverse">
                <input
                  {...register("jobTitle")}
                  type="text"
                  placeholder="Full Stack Developer, Backend Developer"
                  className={`placeholder:font-[500] peer w-[376px] pl-3 text-[18px] font-[600] h-[58px] border ${
                    errors.jobTitle ? 'border-red-500' : 'border-[#BCBCBC]'
                  } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
                />
                <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
                  Job Title
                </label>
                {errors.jobTitle && (
                  <span className="text-red-500 text-sm">{errors.jobTitle.message}</span>
                )}
              </div>

              {/* Company Name */}
              <div className="flex flex-col-reverse">
                <input
                  {...register("companyName")}
                  type="text"
                  placeholder="Google, Microsoft, Amazon ....."
                  className={`peer placeholder:font-[500] w-[376px] pl-3 text-[18px] font-[600] h-[58px] border ${
                    errors.companyName ? 'border-red-500' : 'border-[#BCBCBC]'
                  } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
                />
                <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
                  Company Name
                </label>
                {errors.companyName && (
                  <span className="text-red-500 text-sm">{errors.companyName.message}</span>
                )}
              </div>

              {/* Location */}
              <div className="flex flex-col-reverse">
                <input
                  {...register("location")}
                  type="text"
                  placeholder="New York, London, etc."
                  className={`peer placeholder:font-[500] w-[376px] pl-3 text-[18px] font-[600] h-[58px] border ${
                    errors.location ? 'border-red-500' : 'border-[#BCBCBC]'
                  } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
                />
                <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
                  Location
                </label>
                {errors.location && (
                  <span className="text-red-500 text-sm">{errors.location.message}</span>
                )}
              </div>

              {/* Job Type */}
              <div className="flex flex-col-reverse">
                <select
                  {...register("jobType")}
                  className={`peer placeholder:font-[500] w-[376px] pl-3 text-[18px] font-[600] h-[58px] border ${
                    errors.jobType ? 'border-red-500' : 'border-[#BCBCBC]'
                  } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
                <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
                  Job Type
                </label>
                {errors.jobType && (
                  <span className="text-red-500 text-sm">{errors.jobType.message}</span>
                )}
              </div>

              {/* Salary Range */}
              <div className="flex flex-col w-full">
                <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222] w-full">
                  Salary Range
                </label>
                <div className="flex w-full gap-4">
                  <div className="flex flex-col w-1/2">
                    <input
                      {...register("minSalary", { 
                        valueAsNumber: true,
                        setValueAs: v => v === "" ? 0 : parseInt(v)
                      })}
                      type="number"
                      placeholder="Min Salary"
                      className={`peer placeholder:font-[500] w-full pl-3 text-[18px] font-[600] h-[58px] border ${
                        errors.minSalary ? 'border-red-500' : 'border-[#BCBCBC]'
                      } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
                    />
                    {errors.minSalary && (
                      <span className="text-red-500 text-sm">{errors.minSalary.message}</span>
                    )}
                  </div>
                  <div className="flex flex-col w-1/2">
                    <input
                      {...register("maxSalary", { 
                        valueAsNumber: true,
                        setValueAs: v => v === "" ? 0 : parseInt(v)
                      })}
                      type="number"
                      placeholder="Max Salary"
                      className={`peer placeholder:font-[500] w-full pl-3 text-[18px] font-[600] h-[58px] border ${
                        errors.maxSalary ? 'border-red-500' : 'border-[#BCBCBC]'
                      } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
                    />
                    {errors.maxSalary && (
                      <span className="text-red-500 text-sm">{errors.maxSalary.message}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Application Deadline */}
              <div className="flex flex-col-reverse">
                <input
                  {...register("applicationDeadLine",)}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className={`peer placeholder:font-[500] w-[376px] pl-3 text-[18px] font-[600] h-[58px] border ${
                    errors.applicationDeadLine ? 'border-red-500' : 'border-[#BCBCBC]'
                  } rounded-[10px] focus:outline-none focus:border-[#00AAFF]`}
                />
                <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
                  Application Deadline
                </label>
                {errors.applicationDeadLine && (
                  <span className="text-red-500 text-sm">{errors.applicationDeadLine.message}</span>
                )}
              </div>

              {/* Job Description */}
              <div className="col-span-2 flex flex-col-reverse w-full">
                <textarea
                  {...register("jobDescription")}
                  placeholder="Please share a description to let the candidate know more about the job role"
                  className={`peer placeholder:font-[500] placeholder:text-[16px] placeholder:py-3 placeholder:px-2 w-full pl-3 text-[18px] font-[600] h-[150px] border ${
                    errors.jobDescription ? 'border-red-500' : 'border-[#BCBCBC]'
                  } rounded-[10px] focus:outline-none focus:border-[#00AAFF] resize-none`}
                />
                <label className="text-[20px] font-medium text-[#636363] peer-focus:text-[#222222]">
                  Job Description
                </label>
                {errors.jobDescription && (
                  <span className="text-red-500 text-sm">{errors.jobDescription.message}</span>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <button
              type="button"
              className="w-[232px] h-[59px] border-2 border-black text-black gap-2 rounded-[10px] text-[20px] flex justify-center items-center hover:bg-gray-50 transition-colors"
              onClick={() => {
                const currentValues = watch();
                console.log("Draft saved:", currentValues);
                // Add save draft logic here
              }}
            >
              Save Draft <ChevronsDown className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className={`w-[232px] h-[59px] bg-[#00AAFF] text-[20px] flex gap-2 items-center justify-center text-white rounded-[10px] transition-colors ${
                isSubmitting ? 'opacity-70' : 'hover:bg-[#0099ee]'
              }`}
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Publishing..." : "Publish"} 
              <ChevronsRight className="w-5 h-5" />
            </button>
          </div>
        </form>
      </Modal>

      <button
        onClick={open}
        className="w-[123px] h-[38px] bg-gradient-to-b from-[#A128FF] to-[#6100AD] text-white rounded-[30px] hover:opacity-90 transition-opacity"
      >
        Create Jobs
      </button>
    </>
  );
};

export default CreateJob;