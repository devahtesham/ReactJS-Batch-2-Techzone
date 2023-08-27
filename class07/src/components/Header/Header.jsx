import { Link,NavLink, Outlet } from "react-router-dom";

const Header = ()=> {
  return (
   <div className='bg-dark text-white py-2'>
    <div className="container">
        <div className="row align-items-center justify-content-between">
            <div className="col-4">
                <h1 className='m-0'>Logo</h1>
            </div>
            <div className="col-2">
                <ul className='list-unstyled d-flex m-0 mx-auto'>
                    <li className='me-2'>
                        <NavLink to={"/"} className={({isActive})=> isActive ? `active`:""}>Page1</NavLink>
                    </li>
                    <li className='me-2'>
                        <NavLink to={"/page2"} className={({isActive})=> isActive ? `active`:""}>Page2</NavLink>
                    </li>
                    <li className='me-2'>
                        <NavLink to={"/page3"} className={({isActive})=> isActive ? `active`:""}>Page3</NavLink>
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