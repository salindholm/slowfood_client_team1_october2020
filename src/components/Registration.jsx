import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const Registration = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirmation, setPasswordConfirmation] = useState()

  const userRegistration = async (event) => {
    event.preventDefault()
    await axios.post('/auth', {
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    })
  }

  return (
    <>
      <form>
        <input
          type='email'
          placeholder='Email'
          data-cy='register-email'
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type='password'
          placeholder='Password'
          data-cy='register-password'
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type='password'
          placeholder='Password confirmation'
          data-cy='register-password-confirmation'
          onChange={(event) => setPasswordConfirmation(event.target.value)}
        />
        <input
          type='button'
          value='Submit'
          data-cy='submit'
          onClick={userRegistration}
        />
      </form>
    </>
  )
}

export default Registration