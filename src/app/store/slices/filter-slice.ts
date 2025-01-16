import {createSlice,PayloadAction} from '@reduxjs/toolkit'

interface FilterState {
    title: string;
    location: string;
    jobtype: "Part-time" | "Full-time" | "Remote" | "Contract" | "Internship"
    maxSalary: number
}

const initialState: FilterState = {
    title: "",
    location: "",
    jobtype: "Full-time",
    maxSalary: 0
}

export const FilterSlice = createSlice({
    name: 'filterSlice',
    initialState,
    reducers: {
        setTitle: (state,action: PayloadAction<string>) => {
            state.title = action.payload
        },
        setJobType: (state,action: PayloadAction<"Part-time" | "Full-time" | "Remote" | "Contract" | "Internship">) => {
            state.jobtype = action.payload
        },
        setLocation: (state,action: PayloadAction<string>) => {
            state.location = action.payload
        },
        setMaxSalary: (state,action: PayloadAction<number>) => {
            state.maxSalary = action.payload
        },
    }
})

export const {setJobType,setTitle,setLocation,setMaxSalary} = FilterSlice.actions
export default FilterSlice.reducer