import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Registration = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()

  return (
    <>
      <form>
        <input type='email' placeholder='Email' data-cy='register-email' />
        <input
          type='password'
          placeholder='Password'
          data-cy='register-password'
        />
        <input
          type='password'
          placeholder='Password confirmation'
          data-cy='register-password-confirmation'
        />
        <input type='button' value='Submit' data-cy='submit' />
      </form>
    </>
  )
}

export default Registration
