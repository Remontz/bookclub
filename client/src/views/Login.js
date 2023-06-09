import React, { useRef, useState, useEffect } from 'react';
import '../styles/login-reg.css'
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OWL_ICON_orange from '../images/Owl_Icon_Orange.png'
import OWL_ICON_ocean from '../images/Owl_Icon_Ocean.png'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = () => {
  const [hover, setHover] = useState(false)

  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName] = useState(false)
  const [userFocus, setUserFocus] = useState(false)

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd] = useState(false)
  const [pwdFocus, setPwdFocus] = useState(false)

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

    // When component loads sets focus
    useEffect(() => {
      userRef.current.focus()
    },[])

    useEffect(() => {
      setValidName(USER_REGEX.test(user))
    }, [user])
  
    useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd))
    }, [pwd])

    useEffect(() => {
      setErrMsg('')
    }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if(!v1 || !v2) {
      setErrMsg('Invalid Entry')
      return;
    }
    console.log(user, pwd);
    console.log('TODO BACKEND AFTER NODE.JS COURSE!!!')
    setSuccess(true)
  }

  return (
    <>
    {success ? (
      <section>
        <h1>Successful Login</h1>
        <Link to='/home'>Continue to Scribbler's Sanctuary.</Link>
        <Link to='/dashboard'>Check out your Nest.</Link>
      </section>
    ) : (
      <section className='log-reg'>
        <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'> {errMsg} </p>
        <h1>Login</h1>
      <div className='auth-form-container'>
        <form onSubmit={handleSubmit} className='login-form'>
          { /* USER INPUT */ }
          <label htmlFor='userName'>
            Username:
            <span className={validName ? 'valid' : 'hide' }>
              <FontAwesomeIcon icon='fa-check' />
            </span>
            <span className={validName || !user ? 'hide' : 'invalid'}>
              <FontAwesomeIcon icon='fa-times' />
            </span>
          </label>
          <input
          type='text'  /*  */ 
          id='username'  /*  */
          ref = {userRef}  /* allows us to set focus on the input */
          autoComplete='off'  /* dont want to see previous values for new username */
          onChange={(e) => setUser(e.target.value)}  /* ties the input to the user state */
          required  /*  */
          aria-invalid={validName ? 'false' : 'true'}  /* set to True when the component loads.  Lets a screen reader announce whether the input fields need adjustment before the submission */
          aria-describedby='uidnote'  /* screen reader description, to set rules that input field must follow  */
          onFocus={() => setUserFocus(true)}  /* whether input field has Focus */
          onBlur={() => setUserFocus(false)}  /* when input field is left set to false */
          />
          <p id='uidnote' className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
          <FontAwesomeIcon icon='fa-infoCircle' />
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
          </p>

        {/* PASSWORD INPUT */}
          <label htmlFor='password'>
          Password:
          <span className={validPwd ? 'valid' : 'hide'}>
            <FontAwesomeIcon icon='fa-check' />
          </span>
          <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
            <FontAwesomeIcon icon='fa-times' />
          </span>
          </label>
          <input
          type='password'  /* doesn't support autocomplete, no reference = no focus */ 
          id='password'  /*  */
          onChange={(e) => setPwd(e.target.value)}  /* ties the input to the password state */
          required  /*  */
          aria-invalid={validPwd ? 'false' : 'true'}  /* set to True when the component loads.  Lets a screen reader announce whether the input fields need adjustment before the submission */
          aria-describedby='pwdnote'  /* screen reader description, to set rules that input field must follow  */
          onFocus={() => setPwdFocus(true)}  /* whether input field has Focus */
          onBlur={() => setPwdFocus(false)}  /* when input field is left set to false */
          />
          <p id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
          <FontAwesomeIcon icon='fa-infoCircle' />
          8 to 24 characters.<br />
          Must include uppercase and lowercase letters, a number and a special character.<br />
          Allowed special characters: <span aria-label='exclamation mark'>!</span> <span aria-label='at symbol'>@</span> <span aria-label='hashtag'>#</span> <span aria-label='dollar sign'>$</span> <span aria-label='percent'>%</span>
          </p>
          <button id='inv-btn' disabled={!validName || !validPwd ? true : false}>Log In!</button>
        </form>
        <section className='line'>
          {hover ? <span className='ocean-text'>Register</span> : <span className='orange-text'>Don't Have</span>}
          <button className='link-btn'>
            <Link to='/'>
              <img
                onMouseOver = {() => setHover(true)}
                onMouseOut = {() => setHover(false)}
                alt = 'Scribbler the Owl: Icon'
                src = { hover ? OWL_ICON_orange : OWL_ICON_ocean }
              />
            </Link>
          </button>
          {hover ? <span className='ocean-text'>Now!</span> : <span className='orange-text'>An Account?</span>}
        </section>
      </div>
      <p>--Login & Registration currently Inoperable-- <br />
        <Link to='/home'>Continue to Scribbler's Sanctuary as Guest.</Link>
      </p>
    </section>
    )}
    </>

  )
}

export default Login