// components/FormActions.tsx
import React from "react";
import { ChevronsDown, ChevronsRight } from "lucide-react";
import { UseFormWatch } from "react-hook-form";
import { JobFormData } from "@/types/job";

interface FormActionsProps {
  isValid: boolean;
  isSubmitting: boolean;
  watch: UseFormWatch<JobFormData>;
}

const FormActions = ({ isValid, isSubmitting, watch }: FormActionsProps) => {
  const handleSaveDraft = () => {
    const currentValues = watch();
    console.log("Draft saved:", currentValues);
  };

  return (

    // Save Draft
    <div className="mt-6 flex justify-between">
      <button
        type="button"
        className="w-[232px] h-[59px] border-2 border-black text-black gap-2 rounded-[10px] text-[20px] flex justify-center items-center hover:bg-gray-50 transition-colors"
        onClick={handleSaveDraft}
      >
        Save Draft <ChevronsDown className="w-5 h-5" />
      </button>

      {/* // Submit Button */}
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
  );
};

export default FormActions;