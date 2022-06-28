import React,{FC} from 'react'

import Header from '../components/Header'
import SetPasswordfooter from '../components/SetPasswordfooter'
import SignInForm from '../components/Signinpage/SignInForm'

const signin:FC = () => {

  return (
    <div>
        <Header/>
        <SignInForm/>
        <SetPasswordfooter />
    </div>
  )
}

export default signin