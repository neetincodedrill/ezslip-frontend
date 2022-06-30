import React from "react";
import styles from "./SetPasswordForm.module.css";
import { Button, Heading, Input } from "../Signinpage/SignInForm";
import SignInForm from "../Signinpage/SignInForm";
import Setpassword from "../../pages/setpassword";
import SET_PASSWORD from "@graphql/SET_PASSWORD.graphql";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Signuploader from "../../pages/signUpLoader/[...token]";
import { useRouter } from "next/router";

function getcookie(key: string) {
  const value = document.cookie;
  key = key + "=";
  var tokencookie;
  const parts = value.split("; ");

  console.log(parts);
  parts.forEach((val) => {
    if (val.indexOf(key) === 0) {
      tokencookie = val.substring(key.length);
    }
  });
  return tokencookie;
}

// function getcookie (name:string):string {
//      console.log("getcookie function is run --------------------->>>>>>>>>>>>>")
//   const cName = name +"=";
//   const cDecoded = decodeURIComponent(document.cookie);
//   const cArr = cDecoded.split(';');
//   var res:string="";
//   cArr.forEach(val => {
//     if(val.indexOf(cName) === 0)
//     {
//       res = val.substring(cName.length);
//     }
//   })
//   return res;
// }

const SetPasswordForm = () => {
  const router = useRouter();
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [msg, setMsg] = useState("");

  const [setPassword, { data, error, loading }] = useMutation(SET_PASSWORD);

  const id = String(localStorage.getItem("id"));
  console.log("localstorage is " + localStorage.getItem("id"));
  async function handleSubmit(e: any) {
    e.preventDefault();
    console.log("handleSubmit has run");

    if (password1 != password2) {
      setMsg("Passwords do not match");
    } else {
      setMsg("");

      const result = await setPassword({
        variables: {
          input: {
            id: id,
            password: password1,
          },
        },
      });

      if (loading) return <Signuploader />;

      if (error) console.log(error);

      if (result) {
        console.log("i am in result");
        console.log("result is" + result);
        setMsg("Password set successfully");

        console.log(result.data.setPassword.token);

        const recievedToken = result.data.setPassword.token;

        localStorage.removeItem("id");

        // document.cookie = "name=oeschger; class=bsc ";
        document.cookie = "token=" + recievedToken;
        // document.cookie = "value= settted"
        // document.cookie = "value112= settted231"
        if (recievedToken) {
          router.push("/configuration");
        } else {
          alert("there is some error");
        }

        console.log(getcookie("token"));
      }
    }

    setPassword1("");
    setPassword2("");
  }

  return (
    <div className={styles.setpassword}>
      <form onSubmit={handleSubmit}>
        <h1>Set Password</h1>
        <hr />

        <p className={styles.p1}>
          Email Verified Sucessfully Please Set a password
        </p>

        <div className={styles.pass1}>
          <Input
            placeholder="Enter Password"
            imgsrc="/assets/images/lock_closed.png"
            alt="lock_closed"
            type="password"
            handleChange={setPassword1}
            id="pass1"
            classname="passwordInputs"
            value={password1}
            style={{}}
          />
        </div>

        <div className={styles.pass2}>
          <Input
            placeholder="Confirm Password"
            imgsrc="/assets/images/lock_closed.png"
            alt="lock_closed"
            type="password"
            handleChange={setPassword2}
            id="pass2"
            classname="passwordInputs"
            value={password2}
            style={{}}
          />
        </div>

        <p className={styles.smallpara}>
          (The password must be at least 8 characters including one uppercase,
          one lowercase, one number and a special character)
        </p>
        <div className="buttonSave">
          <Button text="Save" />
          {msg}
        </div>
      </form>
    </div>
  );
};

export default SetPasswordForm;
