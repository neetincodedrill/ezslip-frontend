import React,{FC} from 'react'
import signin from '../../pages/signin';
import styles from "./SignInForm.module.css"
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import LOGIN from "@graphql/LOGIN.graphql";
import { useRouter } from 'next/router';
import Loadingpage from '../loadingpage';
import SigninginLoader from '@components/SigninginLoader';
const cookie = require('cookie-cutter')


export const Heading : FC<{text:string}> = ({text}) => {
    return (
    <h1>{text}</h1>
    )
}

export interface Inputprops {
  placeholder:string,
  imgsrc:string,
  alt: string,
  type: string
  id: string,
  classname: string,
  value: string
  handleChange: React.Dispatch<React.SetStateAction<string>>
  style: object;
}

export const Input:FC<Inputprops> = ({placeholder,imgsrc,alt,type, handleChange, id, value, style}) => {
  function handle(e:any){
    handleChange(e.target.value);
}  

return (
  <div className={styles.inputdiv}  >

    <input type={type} placeholder={placeholder} className={styles.inputs} onChange={ handle } id={id} required value={value} style={style}/>
    <span  style={{height:"24px", width:"24px"}} className={styles.inputdivimg}>  
      <Image 
      src={imgsrc}
      alt={alt}
      height="16"
      width="16"
      />
    </span>
  </div>
  )
}

export const Button:FC<{text:string}>= ({text}) => {
  return (
    <div>
      <div className={styles.buttondiv}>
        <button type="submit">{text}</button>
      </div>
    </div>
  )
}

const SignInForm:FC = () => {
  const router= useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [errorMsg, setErrorMsg] = useState<string>("");
  const [ Login, {loading, error, data} ]= useMutation(LOGIN)

  if(loading){
    return <SigninginLoader />
  }else if( error ) {
    console.log(error);
  }
  else if(data) {
    const token = data.login.token
    // Set a cookie
    cookie.set('ezslipToken', token)
    console.log('token : ',token)
    // alert(getcookie('token'));
    if(data.login.token==null && data.login.message)
    {
      // setErrorMsg(data.login.message);
    }
    else{
      router.push("/configuration");
    }
  }

  return (  
    <div className={styles.signinform} >
      <form onSubmit= {(e) => {
        e.preventDefault(); 
        Login({variables:{
          input : {
            email,
            password
          }
        }})

        setEmail("");
        setPassword("");
      }} >
        
        <Heading text="Sign In"/>
        <hr />
        <p className={styles.p1}>Please enter your email and password</p>
        {/* <h2>{errorMsg}</h2> */}
        <div className={styles.emaildiv}>
          <Input placeholder="Email" imgsrc="/assets/images/mail_open.png" alt={"mail_open"} type="email" handleChange={setEmail} id="emailid" classname="signininputs" value={email} style={{}}/> 
          
        </div>

        <div className={styles.passworddiv}>
          <Input placeholder="Password" imgsrc="/assets/images/lock_closed.png" alt={"lock_closed"} type="password" handleChange={setPassword} id="passid" classname="signininputs" value={password} style={{}}/> 
      
        </div>

      

        <div className={styles.rememberdiv}>
          
          <div className={styles.checkboxdiv}>
              <input type="checkbox" name="" id="" className={styles.checkBox}/> 

          </div> 
          <div className={styles.rememberspan}>
            <span>Remember me on this device</span>
          </div>
        
        </div>
        
        <button type="submit" className={styles.signinbutton} >Sign in</button>            
        <div className={styles.forgotdiv}>
          <Link href="/password_reset_email_id"><a>Forgot password</a></Link>
        </div>
      

      </form>
        
            
    </div>
  )
}

export default SignInForm