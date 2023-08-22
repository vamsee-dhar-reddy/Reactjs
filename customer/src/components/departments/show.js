import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "reactstrap";
import { deleteDept } from "./slice";

export default function Departments(){
	const department = useSelector(state =>state.department)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit=(e)=>{
		e.preventDefault()
		
		navigate('/departments/add')
	}
	return(
		<div>
			<Table bordered className="my-3">
				<thead>
					<tr>
						<td>Id</td>
						<td>Dept</td>
						<td>DeptName</td>
						<td>Actions</td>
					</tr>
				</thead>
				<tbody>
					{
						department.map(dept =>{
						 return	<tr key={dept.id}>
									<td>{dept.id}</td>
									<td>{dept.dept}</td>
									<td>{dept.deptName}</td>
									<td>
										<Link className="btn btn-danger me-2" to={`/departments/edit/${dept.id}`} >Edit</Link>
										<Link className="btn btn-primary " onClick={()=> dispatch(deleteDept(dept.id))}>Delete</Link>
									</td>
							    </tr>
						})
					}
				</tbody>
			</Table>
			<button className="btn btn-success" onClick={handleSubmit} type='submit'>Add Customer</button>

		</div>
	)
}