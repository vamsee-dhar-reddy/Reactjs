import { createSlice } from "@reduxjs/toolkit";
const data=[
    {id:1,empName:'Rohit',empDept:'dept1',email:'emp1@gmail.com'},
    {id:2,empName:'Ramya',empDept:'dept2',email:'emp2@gmail.com'}
]
const employeeSlice=createSlice({
    name:'employee',
    initialState:data,
    reducers:{
        'deleteEmp':(state,action)=>{
            return state.filter(emp=>emp.id !== action.payload)
        },
        'updateEmp':(state,action)=>{
            return state.map(emp => emp.id === action.payload.id ? action.payload:emp)
        },
        'addEmp':(state,action)=>{
            action.payload.id=state.length+1
            return [...state,action.payload]
        }

    }
})
export const{deleteEmp,updateEmp,addEmp}=employeeSlice.actions
export  default  employeeSlice.reducer