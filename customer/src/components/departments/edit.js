import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateDept } from "./slice"

export default function EditDept(){

	const department = useSelector(state=> state.department)
	const dispatch = useDispatch() 
	const navigate = useNavigate()
	const data = useParams()
	const existingDepartment = department.filter(dept=> dept.id == data.id)
	const [editDept, setEditDept] = useState({id:existingDepartment[0].id, dept:existingDepartment[0].dept, deptName:existingDepartment[0].deptName})


	const handleChange=(e)=>{
		setEditDept({...editDept,[e.target.name]:e.target.value})
	}
	const handleSubmit=(e)=>{
		e.preventDefault()
		dispatch(updateDept(editDept))
		navigate('/departments')


	}
	return(
		<div>
			<form onSubmit={handleSubmit}>
				<label>dept : </label>
				<input type='text'name='dept' value={editDept.dept} onChange={handleChange} className='me-2'></input>
				<label>deptName : </label>
				<input type='text'name='deptName' value={editDept.deptName} onChange={handleChange} className= 'me-2'></input>
				<button type="submit" className="btn btn-primary"> Add</button>
			</form>
		</div>
	)
}