import { Table } from "reactstrap";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmp } from "./employeeSlice";

export default function Employees(){
    const employees=useSelector(state=>state.employees)
    const dispatch=useDispatch()
    return(
        <div className="text-center mb-4">
            <h2 className="text-primary">welcome to employees page</h2>
            <Table bordered className="container mt-5">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>EmpName</td>
                        <td>EmpDept</td>
                        <td>Email</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                   {
                    employees.map(emp=>{
                        return   <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.empName}</td>
                                    <td>{emp.empDept}</td>
                                    <td>{emp.email}</td>
                                    <td>
                                        <Link className="btn btn-primary me-2" to={`/employees/edit/${emp.id}`}>Edit</Link>
                                        <Link className="btn btn-danger" onClick={()=>dispatch(deleteEmp(emp.id))}>Delete</Link>
                                    </td>
                                 </tr>
                    })
                   }
                </tbody>
            </Table>
            <Link className="btn btn-success"  to="/employees/add">Add Employee</Link>
        </div>
    )
}