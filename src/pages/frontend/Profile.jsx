import React from 'react'
import { Link } from 'react-router-dom'
import Header from './shared/Header'

const Profile = () => {
  return (
    <div className="">
      <Header></Header>
      <li><Link to='/'><i className="fa fa-cog" /> Home</Link></li>
    </div>
  )
}

export default Profile