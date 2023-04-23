import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { useNavigate } from 'react-router-dom'
import logo from '../images/Owl_Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = (props) => {
    const user = props.user;
    const move = useNavigate()
    console.log('Props:')
    console.log(props)
    console.log('User:')
    console.log(user.name)

  return (
    <nav>
        <ul>
            <li id="title">
                <h1><Link to="/dashboard">Welcome, {user.name}</Link>
                </h1>
            </li>
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
                <Link to="/createBook">
                    <ul id="icon">
                        <li><FontAwesomeIcon icon="fa-solid fa-feather-pointed fa-beat" aria-hidden="true" /></li>
                        <li><span><small>Writing Mode</small></span></li>
                    </ul>
                </Link>
            </li>
            <li>
                <a onClick={()=>move('/login')} id="logout" href="login.html">
                    <ul id="icon">
                        <li><FontAwesomeIcon icon="fa-solid fa-power-off" aria-hidden="true" /></li>
                        <li><span className="sr-only"><small>Logout</small></span></li>
                    </ul>
                </a>
            </li>
        </ul>
        <img src={logo} alt="Scribbler's Sanctuary Logo _ The Nest for Aspiring Writers" />
    </nav>
  )
}

export default Nav