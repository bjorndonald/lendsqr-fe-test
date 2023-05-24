import React from 'react'

import LeftSide from '../../features/login/leftside/LeftSide'
import RightSide from '../../features/login/rightside/RightSide'
import './login.scss'

function Login() {

  return (
    <div id='login'>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default Login