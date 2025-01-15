import { jobSchema } from "@/types/job";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { createContext, useState } from "react";
import { FieldValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form";
import * as z from "zod";

type JobFormData = z.infer<typeof jobSchema>

interface JobContextProps {
    form : UseFormReturn<JobFormData>
    onSubmit : SubmitHandler<JobFormData>;
    isSubmitting : boolean,
    errors : FieldValues,
    openModal : () => void;
    closeModal : () => void;
    opened : boolean;
}

export const JobContext = createContext<JobContextProps | undefined>(undefined)

export const JobProvider : React.FC<{children : React.ReactNode}> = ({children}) =>{
    const [opened,setOpened] = useState(false);
    const {formState : {isSubmitting,errors}} = useForm<JobFormData>({
        resolver : zodResolver(jobSchema)
    })
    const form = useForm<JobFormData>({
        resolver: zodResolver(jobSchema),
    });

    const onSubmit : SubmitHandler<JobFormData> = (data)=>{
        console.log("Form submitted",data)
    }

    const openModal = () => setOpened(true)
    const closeModal = () => setOpened(false)

    return (
        <JobContext.Provider value={{
            form ,
            onSubmit,
            isSubmitting,
            errors,
            openModal,
            closeModal,
            opened,

        }}>
            {children}
        </JobContext.Provider>
    )
}