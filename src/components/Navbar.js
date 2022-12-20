import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light fixed-top">
      <div className="container">
        <NavLink to={"/"} href="" className="navbar-brand">
          Home
        </NavLink>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav ml-auto  ">
            <li className="nav-item">
              <NavLink to={"./login"} href="" className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"./register"} href="" className="nav-link">
                Sign up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
