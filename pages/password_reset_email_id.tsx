import React,{FC} from 'react'
import Header from '../components/Header'
import SetPasswordfooter from '../components/SetPasswordfooter'
import styles from "../styles/password_reset_email_id.module.css"
import { Button, Heading, Input } from "../components/Signinpage/SignInForm";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import  FORGOT_PASSWORD  from '@graphql/FORGET_PASSWORD.graphql';
import Loadingpage from '../components/loadingpage';


const password_reset_email_id:FC = () => {
  const [email , setEmail] = useState("");
  const [ ForgetPassword , {data, loading, error}] = useMutation(FORGOT_PASSWORD);
  const [errorMessage, setErrorMessage] = useState("");
  const [inputCustomStylecolor, setInputCustomStylecolor]= useState("");

  async function handleSubmit() {
    console.log("run handlesunbmt");
     const result = await ForgetPassword({
      variables:{
        email:email
      }
    })

    if(loading) return <Loadingpage />

    if(error ) console.log(error);

    if(result) {
        console.log("result",result);
        if(result.data.forgetPassword.message==="User with email address does not exits")
        {
          setErrorMessage("This email is not linked to any accounnt")
          setInputCustomStylecolor ("red");
          console.log(inputCustomStylecolor);
        }

        else if(result.data.forgetPassword.message)
        {
          console.log("green color set");
          setErrorMessage(result.data.forgetPassword.message)
          setInputCustomStylecolor ("green");
          console.log(errorMessage);
          console.log(inputCustomStylecolor);
        }
    }
    setEmail("");
  }
  
  return (
    <div>
        <Header/>
       <div className={styles.main}>
          <div className={styles.box}>
              <div className={styles.heading}>
                Enter your Email
              </div>
              <hr className={styles.hruler}/>

              <div className={styles.para1}>
              You will receive an email to reset your account password 
              </div>

              <div className={styles.para2}>
              Please enter your Email 
              </div>

              <h3 style={{
                          "color":inputCustomStylecolor,
                          "fontWeight": "400",
                          "fontSize": "12px",
                          "margin": "0 auto 15px",
                          "width": "239px"
                          }}>{errorMessage}</h3>

              <form onSubmit={(e)=>{
                e.preventDefault();
                handleSubmit();
              }}>
                
                <div className={styles.emailinput}>

                 <Input
                placeholder={errorMessage?'Enter Correct Email':'Email'}
                imgsrc="/assets/images/email.png"
                alt={"coolicon"}
                type="email"
                handleChange={setEmail}
                id="signupemail"
                classname="signupinputs"
                value={email}
                style={{"color":inputCustomStylecolor}}
                /> 
               
                </div>

                <div className={styles.signinbuttondiv}>
                  <button type="submit" className={styles.signinbutton} >Sign In</button>
                </div>

              </form>
          </div>
       </div>
        <SetPasswordfooter />
    </div>
  )
}

export default password_reset_email_id