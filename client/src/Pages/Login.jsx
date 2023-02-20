import React from 'react'
import AuthLogin from '../Components/AuthLogin'
import Webname from '../Components/Webname'


const Login = () => {
  return (
    <div className='Auth-Page'>
        <Webname />
        <AuthLogin />
    </div>
  )
}

export default Login