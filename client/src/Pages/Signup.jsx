import React from 'react'
import AuthSignUp from '../Components/AuthSignup'
import Webname from '../Components/Webname'


const Auth = () => {
  return (
    <div className='Auth-Page'>
        <Webname />
        <AuthSignUp />
    </div>
  )
}

export default Auth