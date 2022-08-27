import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='Register'>
        <section className='Successdiv1'>
        <h1>Registration successful!!</h1>
        <h3>Please<Link to='/'> click here </Link>to go back to the registration page</h3>
        </section>
    </div>
  )
}

export default Success