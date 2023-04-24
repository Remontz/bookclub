import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import LOGO from '../images/Owl_Logo_NoBackground.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = (props) => {


  return (
    <nav>
        <ul>
            <li className='nav-header'>
                <ul>
                    <li id="title">
                        <h1><Link to="/dashboard">Welcome, Guest User</Link>
                        </h1>
                    </li>
                    <li>
                        <Link to='/login'>
                    <ul id="icon">
                        <li><FontAwesomeIcon icon="fa-solid fa-power-off" aria-hidden="true" /></li>
                        <li><span className="sr-only"><small>Logout</small></span></li>
                    </ul>
                        </Link>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <li>
                        <Link to = '/dashboard#favorites'>
                            <ul id="icon">
                                <li><FontAwesomeIcon icon="fa-solid fa-bookmark" aria-hidden="true" /></li>
                                <li><span><small>Favorites</small></span></li>
                            </ul>
                        </Link>
                    </li>
                    <li>
                        <Link to="/editUser">
                            <ul id="icon">
                                <li><FontAwesomeIcon icon="fa-solid fa-brands fa-earlybirds" aria-hidden="true" /></li>
                                <li><span><small>Edit Profile</small></span></li>
                            </ul>
                        </Link>
                    </li>
                    <li>
                        <Link to="/createBook" className='button'>
                            <ul id="icon">
                                <li><FontAwesomeIcon icon="fa-solid fa-feather-pointed fa-beat" aria-hidden="true" /></li>
                                <li><span><small>Writing Mode</small></span></li>
                            </ul>
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
        <img
            className='logo'
            src={LOGO} 
            alt="Scribbler's Sanctuary Logo _ The Nest for Aspiring Writers" 
        />
    </nav>
  )
}

export default Nav