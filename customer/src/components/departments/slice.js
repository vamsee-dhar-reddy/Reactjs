import { createSlice } from "@reduxjs/toolkit";

const data = [
	{id:1, dept:'dept1', deptName:'Mobile'},
	{id:2, dept:'dept2', deptName: 'Laptop'}
]
const deptSlice = createSlice({
	name: 'department',
	initialState:data,
	reducers :{
		'addDept1':(state,action)=>{
			action.payload.id = state.length + 1
			return [...state, action.payload]
		},
		'deleteDept':(state,action)=>{
				return state.filter(dept=> dept.id !== action.payload)
		},
		'updateDept':(state,action)=>{
			return state.map(dept=> dept.id == action.payload.id ? action.payload : dept )
		}
	}

})

export const{addDept1,deleteDept,updateDept} = deptSlice.actions
export default deptSlice.reducer