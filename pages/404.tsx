import React, { useEffect } from 'react'
import { useRouter } from 'next/router';

const customStyle = {
  "display" : "flex",
  "justify-content": "center",
  "align-items": "center",
  "color": "red",
  "padding": "20%"
}

const Error = () => {
  const router = useRouter();

  useEffect(()=>{
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <div style={customStyle}>
      <h1>An error has occured and this page does not exists. Redirecting to home </h1>
    </div>
  )
}

export default Error