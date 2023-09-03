import { Link,NavLink, Outlet, useNavigate } from "react-router-dom";

const Header = ()=> {
    const navigate = useNavigate()
    const logoutHandler = ()=>{
        localStorage.removeItem("isLogin");
        navigate("/login")
    }

  return (
   <div className='bg-dark text-white py-2'>
    <div className="container">
        <div className="row align-items-center justify-content-between pe-4 ">
            <div className="col-4">
                <h1 className='m-0'>Logo</h1>
            </div>
            <div className="col-3">
                <ul className='list-unstyled d-flex m-0 mx-auto'>
                    <li className='me-2'>
                        <NavLink to={"/"} className={({isActive})=> isActive ? `active p-2`:""}>SignUp</NavLink>
                    </li>
                    <li className='me-2'>
                        <NavLink to={"/login"} className={({isActive})=> isActive ? `active p-2`:""}>Login</NavLink>
                    </li>
                    <li className='me-2'>
                        <NavLink to={"/page1"} className={({isActive})=> isActive ? `active p-2`:""}>Page1</NavLink>
                    </li>
                    <li className='me-2'>
                        <NavLink to={"/page2"} className={({isActive})=> isActive ? `active p-2`:""}>Page2</NavLink>
                    </li>
                    <li className='me-2'>
                        <NavLink to={"/page3"} className={({isActive})=> isActive ? `active p-2`:""}>Page3</NavLink>
                    </li>
                    <li className='me-2'>
                        <button onClick={logoutHandler} className="btn btn-danger">Logout</button>
                    </li>
                                       
                </ul>
            </div>
        </div>
        <Outlet />


    </div>
    </div>
  );
}

export default Header;  