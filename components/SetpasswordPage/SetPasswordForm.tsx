import React from 'react'
import styles from './SetPasswordForm.module.css';
import { Button, Heading, Input } from '../Signinpage/SignInForm'
import  SET_PASSWORD  from "@graphql/SET_PASSWORD.graphql";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Signuploader from '../../pages/signUpLoader/[...token]';
import { useRouter } from 'next/router';
const cookie = require('cookie-cutter');
import { getCookie, removeCookies,deleteCookie } from 'cookies-next';


const SetPasswordForm = () => {
  const router= useRouter();
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [color, setColor] = useState("");

  const [msg, setMsg]= useState(""); 
  // const [passwordobj, SetPasswordobj] = useState({
  //   password1:"",
  //   password2:"",
  //   color:"",
  //   msg:""
  // });

  const [setPassword, {data, error, loading}]= useMutation(SET_PASSWORD)

  const id = getCookie('id');

  async function handleSubmit(e:any) {
    e.preventDefault();

    if(password1 != password2){
      setMsg ("Passwords do not match");
    }

    else{
      setMsg("")
      console.log("id",id);
      console.log("password",password1);
      const result = await setPassword({
        variables:{
          input:{
          id: id,
          password : password1
          }
        }
      }) 

      if(loading) return (<Signuploader/>)

      if(error) console.log(error);

      if(result) {
      

        const recievedToken = result.data.setPassword.token;

        cookie.set('ezslipToken', recievedToken)

        if(recievedToken){
          
          deleteCookie('id');
          router.push("/configuration");

        }else{
          alert("The password are not meeting the requirements");
          setColor("red");
        }
    }
  }

  }

  return (  
    
    <div className={styles.setpassword}>
      <form onSubmit={handleSubmit}>

        <h1 >Set Password</h1>
        <hr />

        <p className={styles.p1}>Email Verified Sucessfully Please Set a password</p>
       
        <div className={styles.pass1}> 
        
        <Input placeholder="Enter Password" imgsrc="/assets/images/lock_closed.png" alt="lock_closed" type="password" handleChange={setPassword1} id="pass1" classname="passwordInputs" value={password1} style={{}}/>
         {/* <Input placeholder="Enter Password" imgsrc="/assets/images/lock_closed.png" alt="lock_closed" type="password" handleChange={(e)=>{SetPasswordobj.passwordobj(e.target.value)}} id="pass1" classname="passwordInputs" value={password1} style={{}}/> */}

        </div>

       <div className={styles.pass2}>
        <Input placeholder="Confirm Password" imgsrc="/assets/images/lock_closed.png" alt="lock_closed" type="password" handleChange={setPassword2} id="pass2" classname="passwordInputs" value={password2} style={{}}/>
       </div>
        { color
        ? 
        (<p className={styles.smallpara} style={{"color":"red"}}>(The password must be at least 8 characters including one uppercase, one lowercase, one number and a special character)</p>)
        :
        (<p className={styles.smallpara} >(The password must be at least 8 characters including one uppercase, one lowercase, one number and a special character)</p>)}
        <div className="buttonSave">
        <Button text="Save" />
        {msg}
        </div>
        
       

        
      </form>
    </div>
  )
}

export default SetPasswordForm



