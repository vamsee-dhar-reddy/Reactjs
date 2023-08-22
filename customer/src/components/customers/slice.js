import {createSlice} from '@reduxjs/toolkit'
const data = [
	{id:1, userName:'ravi', email:'ravi123@gmail.com'},   // these data is action.payload
	{id:2, userName:'Kiran', email:'kiran512@gmail.com'}
]
const custSlice = createSlice({
	name:'customer',
	initialState : data,
	reducers :{
		'addCustomer': (state,action)=>{
			//console.log(action.payload)   it has complete data .id means data.id number
			action.payload.id = state.length+1
			return [...state, action.payload]   // destructured of array
		},
		'custDelete':(state,action)=>{
			return state.filter(cust=> cust.id !== action.payload)
		},
		'updateCust' :(state,action)=>{
			return state.map(cust=> cust.id = action.payload.id ? action.payload : cust)
		}
	}
})

export const {addCustomer,custDelete, updateCust} = custSlice.actions 
export default custSlice.reducer