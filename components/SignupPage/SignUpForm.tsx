import React, { FC, useEffect } from "react";
import stylessignup from "./SignUpForm.module.css";
import { Button, Heading, Input } from "../Signinpage/SignInForm";
import styles from "./SignUpForm.module.css";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../../graphqlOperations/Signupuser";
import signup from "../../pages/signup";
import Signuploader from "../../pages/signUpLoader/[...token]";
import { useRouter } from "next/router";
import Loadingpage from "../loadingpage";

const SignUpForm = () => {
  
  const router = useRouter();
  const [name, setname] = useState("");
  const [organisation, setorganisation] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [Contact, setContact] = useState<string>("");
  const [signUp, { data, loading, error }] = useMutation(SIGNUP_USER);


  async function handleSubmit (e: any) {
    console.log("handlesubmit is run");
    e.preventDefault();
   


  const result =   await signUp({
      variables: {
        input:  {  
          name: name,
          organizationName: organisation,
          email: email,
          contactNumber: Contact,
        }
      }
    });

console.log(result,"rewrewr")


      if(loading) {
        console.log("loading is running")
         return <Loadingpage/>
      }

      else if(error){
        console.log(error);
      }

       if(result) {

        if(result?.data.signUp?.message === "User already exits! Please redirect to set-password page")
        {
          console.log("this is running");
          alert("You are already signed up. Set up your password"); 
          localStorage.setItem('id',result.data.signUp.id);
          console.log(localStorage.getItem('id'));
          router.push("/setpassword");
        }
        else if(result?.data.signUp?.message === "User already exits!. Please redirect to login page"){
          router.push("/signin");
          alert("Email already exists. Redirecting to login page"); 
        }
        else{
          alert(result?.data.signUp?.message);
        }
      } 
        
      
        
        else if(error) {
          console.log(error);
        }
      
      console.log("handleSubmmit is run");
  
  }

 
  return (
    <>
 

      <div className={styles.signupform}>
        <form onSubmit={handleSubmit}>
          <Heading text="Sign Up" />

          <hr />
          <div className={styles.inputs}>
            <Input
              placeholder="Name"
              imgsrc="/assets/images/coolicon.png"
              alt={"coolicon"}
              type="text"
              handleChange={setname}
              id="signupname"
              classname={styles.signupinputs}
              value={name}
              style={{}}
            />
          </div>

          <div className={styles.inputs}>
            <Input
              placeholder="Organisation Name"
              imgsrc="/assets/images/organisation.png"
              alt={"coolicon"}
              type="text"
              handleChange={setorganisation}
              id="signuporganisation"
              classname="signupinputs"
              value= {organisation}

              style={{}}
            />
          </div>

          <div className={styles.inputs}>
            <Input
              placeholder="Email"
              imgsrc="/assets/images/email.png"
              alt={"coolicon"}
              type="email"
              handleChange={setemail}
              id="signupemail"
              classname="signupinputs"
              value={email}
              style={{}}
            />
          </div>

          <div className={styles.inputs}>
            <Input
              placeholder="Contact Number"
              imgsrc="/assets/images/contact.png"
              alt={"coolicon"}
              type="number"
              handleChange={setContact}
              id="signupContact"
              classname="signupinputs"
              value={Contact}
              style={{}}
            />
          </div>
          <p className={styles.para}>
            By registering you agree to our{" "}
            <Link href="/privacypolicy">
              <span className={styles.link}>privacy policy</span>
            </Link>{" "}
            and all{" "}
            <Link href="/terms">
              <span className={styles.link}>terms and conditions</span>
            </Link>
          </p>

          <input type="submit" className={styles.register} />
        </form>

        <div className={stylessignup.lastpara}>
          <span className={stylessignup.lastpara1st}>
            Already have an Account
          </span>
          <span className={styles.signinlink}><Link href="/signin">Sign In</Link> </span>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
