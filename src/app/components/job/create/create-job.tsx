import React from "react";
import axios from "axios";
import * as z from "zod";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { jobSchema } from "@/types/job";
import { CREATE_JOB } from "@/app/constants/constants";

import FormInput from "./form-input";
import JobTypeSelect from "./job-type";
import SalaryRange from "./salary-range";
import JobDescription from "./job-description";
import FormActions from "./form-actions";
import LocationDropdown from "./location-dropdown";
import DateInput from "./DateInput";

type JobFormValues = z.infer<typeof jobSchema>;

const CreateJob = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const router = useRouter();

  const form = useForm<JobFormValues>({
    resolver: zodResolver(jobSchema),
    mode: "onChange",
    defaultValues: {
      jobTitle: "",
      jobDescription: "",
      companyName: "",
      location: "",
      jobType: "Full-time" as const,
      minSalary: 0,
      maxSalary: 0,
      applicationDeadLine: new Date()
    },
  });

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = form;

  const onSubmit: SubmitHandler<JobFormValues> = async (values) => {
    try {
      const formattedValues = {
        ...values,
        applicationDeadLine: new Date(values.applicationDeadLine),
      };

      const response = await axios.post(CREATE_JOB, formattedValues);
      console.log(response);
      reset();
      close();
      router.replace("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size="848px"
        styles={{
          content: {
            height: "779px",
            width: "848px",
          },
        }}
      >
        <h1 className="text-center font-[700] text-[24px]">
          Create Job Opening
        </h1>

        <form className="pt-[20px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="container mx-auto gap-4 px-4">
            <div className="grid grid-cols-2 place-items-center gap-4">
              {/* Job title */}
              <FormInput
                label="Job Title"
                register={register}
                name="jobTitle"
                placeholder="Full Stack Developer, Backend Developer"
                errors={errors}
              />
              {/* Company Name */}
              <FormInput
                label="Company Name"
                register={register}
                name="companyName"
                placeholder="Google, Microsoft, Amazon ....."
                errors={errors}
              />
              {/* Location Name */}
              <LocationDropdown
              setValue={setValue}
                register={register}
                label={"Location"}
                placeholder="India,Canada,USA ..."
                errors={errors}
              />
                {/* Job Type - Enum[ 'Remote', 'Full-time','Part-time' .... ] */}
              <JobTypeSelect register={register} errors={errors} />
              {/* Salary Range - min and max salary */}
              <SalaryRange register={register} errors={errors} />

              {/* Applciation Deadline */}
              <DateInput
                label="Application Deadline"
                register={register}
                name="applicationDeadLine"
                
                errors={errors}
              />
              {/* Job Description */}
              <JobDescription register={register} errors={errors} />
            </div>
          </div>

          {/* Action sych as - Save draf or submit */}
          <FormActions
            isValid={isValid}
            isSubmitting={isSubmitting}
            watch={watch}
          />
        </form>
      </Modal>

      {/* Tigger job creation modal */}

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
