import React, {useState} from 'react'
import KG_LOGO_orange from '../images/KG_logo_orange.jpg';
import KG_LOGO_ocean from '../images/KG_logo_ocean.jpg';
import OWL_ICON from '../images/Owl_Icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = (props) => {
    const {linkedIn, gitHub, portfolio} = props;
    const [hover, setHover] = useState(false)
  return (
    <footer>
        
        <h2>Contact the Developer</h2>
        <h3><img src={OWL_ICON} alt='Scribbler the Owl icon' /> Kacy Gilbert <img src={OWL_ICON} alt="Scribbler the Owl icon" /></h3>
        <ul className='footer-list'>
            <li>
                <a href={linkedIn} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon='fa-brands fa-linkedin' aria-hidden='true' />
                    <span className='sr-only'>LinkedIn</span>
                </a>
            </li>
            <li>
                <a href={gitHub} target='_blank' rel='noreferrer'>
                    <FontAwesomeIcon icon='fa-brands fa-github' aria-hidden='true' />
                    <span className='sr-only'>GitHub</span>
                </a>
            </li>
            <li>
                <a href={portfolio} target='_blank' rel='noreferrer'>
                    <img onMouseOver={() => setHover(true)} onMouseOut={()=> setHover(false)} src={hover ? KG_LOGO_ocean : KG_LOGO_orange} alt='Kacy Gilbert Developer Logo' />
                    <span className='sr-only'>Software Developer Kacy Gilbert</span>
                </a>
            </li>
            <li>
                <a href='mailto: Kacy Gilbert' onClick="this.href=this.href.replace(' Kacy ', 'gilbertka'); this.href=this.href.replace('Gilbert', 'cy90@gmail.com')">
                    <FontAwesomeIcon icon='fa-solid fa-envelope' aria-hidden='true' />
                    <span className='sr-only'>Email</span>
                </a>
            </li>
        </ul>
        <p><small>&copy;2023 Kacy Gilbert. All Rights Reserved.</small></p>
    </footer>
  )
}

export default Footer