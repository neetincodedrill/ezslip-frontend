import React from 'react'
import { MainCommonFooter } from '../components/ContactPage/ContactForm'
import Header from '../components/Header'
import SignupFooter from "../components/SignupFooter"

import SignUpForm from '../components/SignupPage/SignUpForm'

const signup = () => {
  return (

    <div>
        <Header />
        <SignUpForm />
        <SignupFooter />
    </div>
    
  )
}


export default signup