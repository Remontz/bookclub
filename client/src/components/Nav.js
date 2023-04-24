import React, {useState} from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import LOGO from '../images/Owl_Logo_NoBackground.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = (props) => {
    const [favoritesHover, setFavoritesHover] = useState(false)
    const [editUserHover, setEditUserHover] = useState(false)
    const [createBookHover, setCreateBookHover] = useState(false)
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
                <ul className = 'nav-links'>
                    <li
                        onMouseOver={() => setFavoritesHover(true)}
                        onMouseOut={() => setFavoritesHover(false)} 
                    >{favoritesHover ? (<Link to="/dashboard#favorites"><span>Favorites</span></Link>) : (<Link to="/dashboard#favorites"><span><FontAwesomeIcon icon="fa-solid fa-bookmark" aria-hidden="true" /></span></Link>) }
                    </li>
                    <li
                        onMouseOver={() => setEditUserHover(true)}
                        onMouseOut={() => setEditUserHover(false)} 
                    >{editUserHover ? (<Link to="/editUser"><span>Edit Profile</span></Link>) : (<Link to="/editUser"><span><FontAwesomeIcon icon="fa-solid fa-brands fa-earlybirds" aria-hidden="true" /></span></Link>) }
                    </li>
                    <li
                        className={createBookHover ? null : 'button'}
                        onMouseOver={() => setCreateBookHover(true)}
                        onMouseOut={() => setCreateBookHover(false)} 
                    >{createBookHover ? (<Link to="/createBook"><span>Writer's Mode</span></Link>) : (<Link to="/createBook"><span><FontAwesomeIcon icon="fa-solid fa-feather-pointed fa-beat" aria-hidden="true" /></span></Link>) }
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