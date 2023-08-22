import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './components/customers/slice'
import departmentReducer from './components/departments/slice'
import employeeReducer from './components/employees/employeeSlice'
const store = configureStore({
	reducer: {
		customer : customerReducer,
		department :departmentReducer,
		employees : employeeReducer
	}
})

console.log(store.getState())
export default store