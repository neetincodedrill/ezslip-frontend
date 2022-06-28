import React from 'react'
import SigninginLoader from '../components/SigninginLoader'

const check = () => {
  fetch('http://localhost:5000/get', { 
    method: 'get', 
    headers:  
    { Authentication: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjJhNjRhOGVlZDcwMTdjZmIwYzNjZCIsImlhdCI6MTY1NjA3NDkxNSwiZXhwIjoxNjU2MTYxMzE1fQ.p5yUxuAdWhCQhvpoRQVgaADRWjijtpcWMgL3m72aE8w" }, 
  }).then(res=>{
    return res.json()
  }).then(data=>{
    console.log(data)
  }) 
  return (
    <div>
        <SigninginLoader />
    </div>
  )
}

export default check