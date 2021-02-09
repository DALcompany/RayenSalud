import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      Tutoriales :
      <ul>
        <li><Link to='/tutorials'>/tutorials</Link></li>
      </ul>
    </>
  )
}

export default NotFound
