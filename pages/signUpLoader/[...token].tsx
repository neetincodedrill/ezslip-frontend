import React,{FC, useEffect} from 'react'
import { Circles, Rings } from  'react-loader-spinner'
import { useRouter,Router } from 'next/router'
// import { useMutation } from "@apollo/client";
import { useQuery } from '@apollo/client';
import USER_VERIFY from "@graphql/USER_VERIFICATION.graphql"
import { NextResponse, NextRequest } from 'next/server'
import { setCookies } from 'cookies-next';
import { getCookie } from 'cookies-next';

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
  let token = router.asPath.slice(14)

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
    setCookies('id',data.userVerification.id) ;

    if(data.userVerification.message=="User verified"){

    router.push("/setpassword")
    console.log(getCookie('id'));

    }
    else{
      router.push("/signup")
    }

  }

  if(error) console.log(error);
  
  return (
    <div>
      <Signuploader />
    </div>
  )
  
}

export default Post