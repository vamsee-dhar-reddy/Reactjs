import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCustomer } from "./slice"

export default function AddCustomer(){

	const [customer, setCustomer] = useState({id:'', userName:'', email:''})
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleChange =(e)=>{
		setCustomer({...customer,[e.target.name]:e.target.value})
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		dispatch(addCustomer(customer))
		navigate('/customers')
	}

	return(
		<div>
			<h2>Welcome to AddCustomer</h2>
			<form onSubmit={handleSubmit}>
				<label>Name : </label>
				<input type='text' name='userName' value={customer.userName} onChange={handleChange} className='me-2'></input>
				<label>Email : </label>
				<input type='text' name='email' value={customer.email} onChange={handleChange} className='me-2'></input>
				<button type="submit" className="btn btn-primary " >AddCustomer</button>
			</form>
		</div>
	)
}