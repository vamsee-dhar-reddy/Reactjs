import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmp } from "./employeeSlice";

export default function EditEmployees(){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const employees=useSelector(state=>state.employees)
    const departments=useSelector(state=>state.department)
    const param=useParams()
    
    const existingEmployee=employees.filter(emp=>emp.id == param.id && emp)
    const[editEmp,setEditEmp]=useState({id:existingEmployee[0].id,empName:existingEmployee[0].empName,empDept:existingEmployee[0].empDept,email:existingEmployee[0].email})

    const handleChange=(e)=>{
        setEditEmp({...editEmp,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(updateEmp(editEmp))
        navigate('/employees')

    }
    return(
        <div className="container text-center">
            <h2>welcome to edit page</h2>
            <form onSubmit={handleSubmit}>
                <label>empName</label>
                <input type="text" name='empName' value={editEmp.empName} onChange={handleChange}></input>
                <br/>
                <label>empDept</label>
                <select  name='empDept' value={editEmp.empDept} onChange={handleChange}>
                    <option value=''>select</option>
                    {
                        departments.map(dept=>{
                            return(
                                <option key={dept.id} value={dept.deptName}>{dept.deptName}</option>
                            )
                        })
                    }
                </select>
                <br/>
                <label>email</label>
                <input type="text" name='email' value={editEmp.email} onChange={handleChange}></input>
                <br/>
                <button type='submit' className="btn btn-success my-2">update</button>
            </form>
        </div>
    )
}