import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import AddCustomer from "./components/customers/add";
import EditCustomer from "./components/customers/edit";

import Customer from "./components/customers/show";
import AddDepartments from "./components/departments/add";
import EditDept from "./components/departments/edit";
import Home from "./components/departments/home";
import Departments from "./components/departments/show";
import AddEmployees from "./components/employees/add";
import EditEmployees from "./components/employees/edit";
import Employees from "./components/employees/show";
import Tickets from "./components/tickets/show";

function App() {
  return (
    
      <BrowserRouter>
       <div className="container">
        <Navbar color="light">
           <Nav>
            <NavbarBrand>Customer Support</NavbarBrand>
            <NavItem className="nav-link text-primary">
                <Link to='/' className="text-decoration-none">Home</Link>
              </NavItem>
              <NavItem className="nav-link text-primary">
                <Link to='/customers' className="text-decoration-none">Customers</Link>
              </NavItem>
              <NavItem className="nav-link text-primary">
                <Link to='/departments' className="text-decoration-none">Departments</Link>
              </NavItem>
              <NavItem className="nav-link text-primary">
                <Link to='/employees' className="text-decoration-none">Employees</Link>
              </NavItem>
              <NavItem className="nav-link text-primary">
                <Link to='/tickets' className="text-decoration-none">Tickets</Link>
              </NavItem>  
           </Nav>     
          </Navbar>
       </div>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/customers" element={<Customer></Customer>}></Route>
          <Route path="/customers/addcustomer" element={<AddCustomer></AddCustomer>}></Route>
          <Route path="/customers/edit/:id" element={<EditCustomer></EditCustomer>}></Route>
         
          <Route path="/departments" element={<Departments></Departments>}></Route>
          <Route path="/departments/add" element={<AddDepartments></AddDepartments>}></Route>
          <Route path="/departments/edit/:id" element={<EditDept></EditDept>}></Route>
         
          <Route path="/employees" element={<Employees></Employees>}></Route>
          <Route path="/employees/add" element={<AddEmployees></AddEmployees>}></Route>
          <Route path="/employees/edit/:id" element={<EditEmployees></EditEmployees>}></Route>
          <Route path="/tickets" element={<Tickets></Tickets>}></Route>
        </Routes>
      </div>
  
    
        
      </BrowserRouter>
  
    
    
  );
}

export default App;
