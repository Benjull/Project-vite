import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            
          </li>
          
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/text">Text</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
