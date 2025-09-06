import React from 'react'

function Login() {
    const login = () => {
    window.location.href = "http://localhost:3000/auth"
    }
  return (
    <>
    <h1>Email Summarizer</h1>
    <button onClick={login}>Sign Up with Google</button>
    </>
  )
}

export default Login