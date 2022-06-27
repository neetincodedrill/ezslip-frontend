import React,{FC} from 'react'
import { MainCommonFooter } from '../components/ContactPage/ContactForm'
import Header from '../components/Header'
import SetPasswordfooter from '../components/SetPasswordfooter'
import SetPasswordForm from '../components/SetpasswordPage/SetPasswordForm'
import SignInForm from '../components/Signinpage/SignInForm'


const Setpassword:FC = () => {
  return (
<>
        <Header />
  
        <SetPasswordForm />
        
       <SetPasswordfooter />
</>
  
  )
}

export default Setpassword