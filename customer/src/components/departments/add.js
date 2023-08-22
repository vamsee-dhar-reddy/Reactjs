import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addDept1 } from "./slice"

export default function AddDepartments(){
	const [addDept, setAddDept] = useState({id:null,dept:'', deptName:''})
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleChange=(e)=>{
		setAddDept({...addDept,[e.target.name]:e.target.value})
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		dispatch(addDept1(addDept))
		navigate('/departments')


	}
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<label>dept : </label>
				<input type='text'name='dept' value={addDept.dept} onChange={handleChange} className='me-2'></input>
				<label>deptName : </label>
				<input type='text'name='deptName' value={addDept.deptName} onChange={handleChange} className= 'me-2'></input>
				<button type="submit" className="btn btn-primary"> Add</button>
			</form>
		</div>
	)
}