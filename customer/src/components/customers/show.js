import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { custDelete } from "./slice";
export default function Customer(){
	const customer = useSelector(state=>state.customer)
	console.log(customer)
	const dispatch = useDispatch()
	return(
		<div className="container">
			<Table bordered className="text-center my-5">
				<thead>
					<tr>
						<td>ID</td>
						<td>Name</td>
						<td>Email</td>
						<td>Actions</td>
					</tr>
				</thead>
				<tbody>
					{
						customer.map(cust=>{
						return	<tr key={cust.id}>
								<td>{cust.id}</td>
								<td>{cust.userName}</td>
								<td>{cust.email}</td>
								<td>
									<Link to={`/customers/edit/${cust.id}`} className="btn btn-danger me-2">Edit</Link>
									<button type="submit" className="btn btn-primary" onClick={()=>dispatch(custDelete(cust.id))} >Delete</button>
								</td>
							</tr>
						})
					}
				</tbody>
			</Table>
			<Link to='/customers/addcustomer'>
					<button type="submit" className="btn btn-success"> Add User</button>
			</Link>
		</div>
	)
}