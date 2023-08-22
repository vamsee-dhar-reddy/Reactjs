import { useState } from "react";
import { useDispatch, useSelector,} from "react-redux";
import { useNavigate} from "react-router-dom";
import { addEmp } from "./employeeSlice";

export default function AddEmployees(){
    const[editEmp,setEditEmp]=useState({id:null,empName:'',empDept:'',email:''})

    const dispatch=useDispatch()
    const navigate=useNavigate()
    const departments=useSelector(state=>state.department)

    const handleChange=(e)=>{
        setEditEmp({...editEmp,[e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(addEmp(editEmp))
        navigate('/employees')
    }
    return(
        <div className="container text-center">
            <h2>welcome to Add page</h2>
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
                <button type='submit'>update</button>
            </form>
        </div>
    )
}