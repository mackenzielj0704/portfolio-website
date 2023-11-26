import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';
import Background from './background';

function Header () {

    return (
      <>
      <Background/>
        <div className='box'>
          <nav id="sidebarMenu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li><li className="nav-item">
                <Link className="nav-link" to="/resume">Resume</Link>
              </li><li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
        </nav>
        <Outlet />
      </div>
    </>
    )
}

export default Header