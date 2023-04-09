import { useState, useEffect } from 'react'
import './userDetails.css'
import { useAuthContext } from '../../contexts/AuthContext'
import { useForm } from '../../hooks/useForm'
import userServiceFactory from '../../services/userService'

const UserDetails = () => {
  const { accessToken } = useAuthContext()
  const userService = userServiceFactory(accessToken)
  const [userDetails, setUserDetails] = useState({})

  const createdOn = new Date(userDetails._createdOn)

  useEffect(() => {
    userService.getUserDetails()
      .then(res => setUserDetails({ ...res }))
  }, [])

  console.log(userDetails._createdOn)

  return (
    <div>
      <div className='flex-center'>
        <div className='container-default' id="details">
          <img src={userDetails.pfp} className='details-pfp' />
          <div className='details-info'>
            <h1>{userDetails.username}</h1>
            <p>Created on: {createdOn.toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails