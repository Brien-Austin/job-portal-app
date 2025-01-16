// import React from 'react';
// import { DatePicker } from '@mantine/dates';
// import { FieldErrors, UseFormRegister } from 'react-hook-form';
// import { JobFormData } from '@/types/job';
// import { MantineTheme } from '@mantine/core';

// interface DateSelectProps {
//   label: string;
//   name: keyof JobFormData;
//   register: UseFormRegister<JobFormData>;
//   errors: FieldErrors<JobFormData>;
//   minDate?: Date;
// }

// const DateSelect: React.FC<DateSelectProps> = ({
//   label,
//   name,
//   register,
//   errors,
//   minDate = new Date(),
// }) => {
//   return (
//     <div className="flex flex-col space-y-1">
//       <label className="text-[20px] font-medium text-[#636363]">
//         {label}
//       </label>
//       <DatePicker
//         {...register(name)}
//         placeholder="Select a date"
//         minDate={minDate}
//         inputFormat="YYYY-MM-DD"
//         styles={(theme: MantineTheme) => ({
//           input: {
//             width: '376px',
//             height: '58px',
//             fontSize: '18px',
//             fontWeight: 600,
//             borderColor: errors[name] ? theme.colors.red[6] : '#BCBCBC',
//             borderRadius: '10px',
//             '&:focus': {
//               borderColor: '#00AAFF',
//             },
//           },
//         })}
//       />
//       {errors[name] && (
//         <span className="text-red-500 text-sm">{errors[name]?.message}</span>
//       )}
//     </div>
//   );
// };

// export default DateSelect;
