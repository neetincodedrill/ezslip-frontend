import React,{FC} from 'react'
import styles from "./SignInForm.module.css"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import LOGIN from "@graphql/LOGIN.graphql";
import { useRouter } from 'next/router';
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

const [ Login, {loading, error, data} ]= useMutation(LOGIN)

const [emailerrorMsg, setEmailerrorMsg] = useState<string>("");
const [passwordErrorMsg, setPassworderrorMsg] = useState<string>("");

async function handleSubmit() {

  const result =  await Login({variables:{
    input : {
      email,
      password
    }
  }})

if(loading){
  return <SigninginLoader />
} 

if( error ) {
  return <h2>Error</h2>
}

// console.log(result)
// console.log(data);
if( result) {
  console.log(result.data);
  if(result.data.login.token===null){
  const message = result.data.login.message;

  if(message) {

    if(message.includes("email")){
      setEmailerrorMsg(message);
      setPassworderrorMsg("");
    }

    if(message.includes("password")) {
      setPassworderrorMsg(message);
      setEmailerrorMsg("");
    }

  }
}
else{

  const token = result.data.login.token;

  cookie.set('ezslipToken', token);

  router.push("/configuration");
}



}

  
  setEmail("");
  setPassword("");
}



return (  
  <div className={styles.signinform} >
    <form onSubmit= {(e) => {
      e.preventDefault(); 
      
      handleSubmit();

    }} >
      
      <Heading text="Sign In"/>
      <hr />
      <p className={styles.p1}>Please enter your email and password</p>
      
      <div className={styles.emaildiv}>
        <Input placeholder="Email" imgsrc="/assets/images/mail_open.png" alt={"mail_open"} type="email" handleChange={setEmail} id="emailid" classname="signininputs" value={email} style={{}}/> 
        <h5 style={{
          "color":"red",
      }}>{emailerrorMsg}</h5>
      </div>

      <div className={styles.passworddiv}>
        <Input placeholder="Password" imgsrc="/assets/images/lock_closed.png" alt={"lock_closed"} type="password" handleChange={setPassword} id="passid" classname="signininputs" value={password} style={{}}/> 
        <h5 style={{
          "color":"red",
      }}>{passwordErrorMsg}</h5>
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