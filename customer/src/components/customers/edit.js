import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateCust } from "./slice"


export default function EditCustomer(){
	const dispatch = useDispatch()
	const navigate =useNavigate()
	const data = useParams()
	console.log('params',data)
	const customers = useSelector(state=> state.customer)
	console.log(customers)
	const existingCustomer = customers.filter(cust=>cust.id === data.id)
	// console.log('ex-cust',existingCustomer)
	const [customer, setCustomer] = useState({id:existingCustomer[0].id, userName:existingCustomer[0].userName, email:existingCustomer[0].email})


	const handleChange =(e)=>{
		setCustomer({...customer,[e.target.name]:e.target.value})
	}


	const handleSubmit=(e)=>{
		e.preventDefault()
		dispatch(updateCust(customer))
		navigate('/customers')
	}
		return(
			<div>
			<h2>Welcome to Edit Customer</h2>
			<form onSubmit={handleSubmit}>
				<label>Name : </label>
				<input type='text' name='userName' value={customer.userName} onChange={handleChange} className='me-2'></input>
				<label>Email : </label>
				<input type='text' name='email' value={customer.email} onChange={handleChange} className='me-2'></input>
				
				<button type="submit" className="btn btn-primary"  >Update Customer</button>
			</form>

			</div>
		)
}