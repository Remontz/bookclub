import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24} $/;


const Register = ({user}) => {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [validName, setValidName = useState(false)]
  const [userFocus, setUserFocus = useState(false)]

  const [pwd, setPwd] = useState('')
  const [validPwd, setValidPwd = useState(false)]
  const [pwdFocus, setPwdFocus = useState(false)]

  const [matchPwd, setMatchPwd] = useState('')
  const [validMatch, setValidMatch = useState(false)]
  const [matchFocus, setMatchFocus = useState(false)]

  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)

  // When component loads sets focus
  useEffect(() => {
    const result = USER_REGEX.test(user)
    userRef.currentfocus()
  },[])

  // Whenever name, password change the value is tested against the REGEX and if true: sets the value
  useEffect(() => {
    setValidName(USER_REGEX.test(user))
  }, [user])

  useEffect(() => {
    setValidPwd(USER_REGEX.test(pwd))
    setValidMatch(pwd === matchPwd)
  }, [pwd, matchPwd])

  // Any time user changes any of the state variables, the error message is cleared.
  useEffect(() => {
    setErrMsg('')
  }, [user, pwd, matchPwd])


  return (
    <div>
      <h1>Register</h1>

    </div>
  )
}

export default Register