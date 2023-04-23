import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const Register = ({user}) => {
  const [currentName, setCurrentName] = useState('');
  const handleSubmit = () => {
    user.name.current = currentName
  }
  return (
    <div>
      <h1>Register</h1>
      <Link to='/home'>Home</Link>
      <form onSubmit={(e)=>handleSubmit()}>
        <label htmlFor='currentName'>User Name:</label>
        <input type='text' id='currentName' name='currentName' required minLength='3' onChange={(e)=>setCurrentName(e.target.value)} />
        <button>Change User Name</button>
      </form>
    </div>
  )
}

export default Register