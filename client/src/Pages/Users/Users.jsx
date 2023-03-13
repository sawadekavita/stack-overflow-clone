import React from 'react'
import { useLocation } from 'react-router-dom'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import './Users.css'
import UsersList from './UsersList'

const Users = () => {
const location =useLocation()
// console.log(location)
  return (
    
<div className="home-container-1">
  <LeftSidebar />
  <div className="home-container-2">
{
  location.pathname ==='/Users'? <UsersList /> :<></>
}
</div>
</div>
    
  )
}

export default Users