import React,{FC, useEffect} from 'react'
import { Circles, Rings } from  'react-loader-spinner'
import { useRouter,Router } from 'next/router'
// import { useMutation } from "@apollo/client";
import { useQuery } from '@apollo/client';
import {USER_VERIFY} from "../../graphqlOperations/userVerification"
import { NextResponse, NextRequest } from 'next/server'
const customstyle = {"color":"red"};
const Signuploader:FC = () => {
  return (
    <div className='loader' style={customstyle}>
        <Rings color="#00BFFF" height={200} width={200}/>
    </div>
  )
}

const Post:FC = ():any => {

  const router = useRouter();

  console.log(router.asPath.slice(14));
  let token = router.asPath.slice(14)

  console.log(token)


  const  {data, error, loading} = useQuery(USER_VERIFY,
    {
      variables : {
      verificationId: token
    }
  }
  )
   
  if(loading) console.log("loading")

  if(data) {
    console.log(data);
    console.log(data.userVerification.message);
    console.log("id is "+data.userVerification.id);
    console.log("Router is ---------->",router);
    
    localStorage.setItem('id',`${data.userVerification.id}`)

    console.log("localstorage id is"+localStorage.getItem('id'));

    if(data.userVerification.message=="User verified"){

    router.push("/setpassword")
    }
    else{
      router.push("/signup")
    }

  }


  if(error) console.log(error);

  
  return (
    <div>
      {/* <p>{token}</p> */}
      <Signuploader />
    </div>

  )
  
}




export default Post