import React from 'react'
import Header from "../components/Header"
import LoginMain from '../components/LoginMain'

const Login = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Header />
        <LoginMain />
    </div>
  )
}

export default Login