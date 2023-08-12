import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Background from './background';



function Header () {

    return (
      <>
      <Background/>
        <div className='box'>
          <nav id="sidebarMenu">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">Projects</a>
              </li><li className="nav-item">
                <a className="nav-link" href="/resume">Resume</a>
              </li><li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
        </nav>
        <Outlet />
      </div>
    </>
    )
}

export default Header